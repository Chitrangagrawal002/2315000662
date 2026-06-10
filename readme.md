# Campus Notification System

## Description

Campus Notification System is a web application that displays campus notifications such as Placement, Result, and Event announcements.

Notifications are fetched from the provided API and displayed with filtering and priority-based sorting.

## Features

* Fetch notifications from API
* Priority notification section
* Filter by notification type
* Responsive design
* Logging middleware integration
* Backend proxy for API communication

## Project Structure

ROLL_NUMBER/

├── logging_middleware/

├── notification_app_be/

├── notification_app_fe/

└── notification_system_design.md

## Installation

### Backend

```bash
cd notification_app_be
npm install
node server.js
```

### Frontend

```bash
cd notification_app_fe
npm install
npm start
```

## Notification Priority

1. Placement
2. Result
3. Event

Latest notifications are shown first within the same priority category.

## Technologies

Frontend

* React JS
* JavaScript
* CSS

Backend

* Express JS
* Axios

## Working Demo

<img width="1363" height="817" alt="Screenshot 2026-06-10 132832" src="https://github.com/user-attachments/assets/bcbfba7a-3011-4e59-b028-85c4c8a1e6af" />

<img width="1378" height="773" alt="Screenshot 2026-06-10 132824" src="https://github.com/user-attachments/assets/cb115cc6-f9ba-435e-996d-e0a4569fd8be" />

  *Working Video

    https://github.com/user-attachments/assets/d263b4c6-ded2-426b-bf9a-4778d279de7d

## Author

Roll Number: 2315000662
