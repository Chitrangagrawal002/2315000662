import { useEffect, useState } from "react";
import NotificationCard from "../components/NotificationCard";
import { fetchNotifications } from "../services/api";
import { Log } from "../services/logger";

function Home() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadNotifications = async (type = "") => {
    try {
      setLoading(true);
      setError("");

      const data = await fetchNotifications(
        1,
        10,
        type
      );

      setNotifications(
        data.notifications || []
      );

      await Log(
        "frontend",
        "info",
        "api",
        "Notifications fetched successfully"
      );

      setLoading(false);
    } catch (error) {
      setLoading(false);

      setError(
        "Failed to load notifications"
      );

      await Log(
        "frontend",
        "error",
        "api",
        "Failed to fetch notifications"
      );
    }
  };

  useEffect(() => {
    loadNotifications();
  }, []);

  const handleFilter = async (type) => {
    await loadNotifications(type);

    await Log(
      "frontend",
      "info",
      "component",
      `Filter selected: ${type || "All"}`
    );
  };

  const priorityOrder = {
    Placement: 3,
    Result: 2,
    Event: 1,
  };

  const priorityNotifications =
    [...notifications]
      .sort((a, b) => {
        const priorityDiff =
          priorityOrder[b.Type] -
          priorityOrder[a.Type];

        if (priorityDiff !== 0)
          return priorityDiff;

        return (
          new Date(b.Timestamp) -
          new Date(a.Timestamp)
        );
      })
      .slice(0, 5);

  return (
    <div className="container">
      <h1>Campus Notifications</h1>

      <div className="filters">
        <button
          onClick={() =>
            handleFilter("")
          }
        >
          All
        </button>

        <button
          onClick={() =>
            handleFilter("Event")
          }
        >
          Event
        </button>

        <button
          onClick={() =>
            handleFilter("Result")
          }
        >
          Result
        </button>

        <button
          onClick={() =>
            handleFilter(
              "Placement"
            )
          }
        >
          Placement
        </button>
      </div>

      {loading && (
        <p>Loading notifications...</p>
      )}

      {error && (
        <p className="error">
          {error}
        </p>
      )}

      <h2>Priority Notifications</h2>

      {priorityNotifications.map(
        (item) => (
          <div
            className="priority-card"
            key={item.ID}
          >
            <NotificationCard
              notification={item}
            />
          </div>
        )
      )}

      <h2>All Notifications</h2>

      {notifications.map((item) => (
        <NotificationCard
          key={item.ID}
          notification={item}
        />
      ))}
    </div>
  );
}

export default Home;