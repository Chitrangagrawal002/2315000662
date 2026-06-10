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

## Author

Roll Number: 2315000662
