export const Log = async (
  stack,
  level,
  packageName,
  message
) => {
  try {
    await fetch(
      "http://localhost:5000/logs",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          stack,
          level,
          package: packageName,
          message,
        }),
      }
    );
  } catch (err) {
    console.log(err);
  }
};