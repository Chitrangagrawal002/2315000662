export const fetchNotifications = async (
  page = 1,
  limit = 10,
  type = ""
) => {
  let url =
    `http://localhost:5000/notifications?page=${page}&limit=${limit}`;

  if (type) {
    url += `&type=${type}`;
  }

  const response = await fetch(url);

  return await response.json();
};