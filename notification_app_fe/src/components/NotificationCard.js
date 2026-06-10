function NotificationCard({
  notification,
}) {
  const formattedDate =
    new Date(
      notification.Timestamp
    ).toLocaleString();

  return (
    <div className="card">
      <div className="type">
        {notification.Type}
      </div>

      <div className="message">
        {notification.Message}
      </div>

      <div className="time">
        {formattedDate}
      </div>
    </div>
  );
}

export default NotificationCard;