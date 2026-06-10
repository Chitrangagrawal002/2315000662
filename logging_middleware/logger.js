const axios = require("axios");

const TOKEN = process.env.TOKEN || "";

async function Log(
  stack,
  level,
  packageName,
  message
) {
  try {
    const response =
      await axios.post(
        "http://4.224.186.213/evaluation-service/logs",
        {
          stack,
          level,
          package: packageName,
          message,
        },
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );

    return response.data;
  } catch (error) {
    console.error(
      "Logging failed:",
      error.message
    );
  }
}

module.exports = Log;