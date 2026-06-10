# Campus Notification System Design

## Overview

This project is a Campus Notification System built using React JS for the frontend and Express JS for the backend.

The application fetches notifications from the provided Notification API and displays them to users with filtering and priority-based sorting.

## Architecture

Frontend (React JS)

* Notification List
* Priority Notifications
* Filter Controls
* Logging Integration

Backend (Express JS)

* Notification API Proxy
* Logging API Proxy

External Services

* Notification Service API
* Logging Service API

## Notification Priority Logic

Notifications are displayed according to the following priority:

1. Placement
2. Result
3. Event

If multiple notifications belong to the same category, the most recent notification is shown first based on timestamp.

## Filtering

The application supports:

* All Notifications
* Event Notifications
* Result Notifications
* Placement Notifications

## Logging Strategy

Logs are generated for:

* Page load
* Notification fetch success
* Notification fetch failure
* Filter selection

## API Flow

Frontend → Express Backend → External Notification API

Frontend → Express Backend → External Logging API

Using a backend proxy eliminates browser CORS issues and centralizes API communication.

## Responsive Design

The UI is responsive and supports desktop and mobile devices using CSS media queries.

## Technologies Used

Frontend

* React JS
* JavaScript
* CSS

Backend

* Node JS
* Express JS

Libraries

* Axios
* CORS

## Future Improvements

* Search functionality
* Pagination controls
* Notification bookmarking
* User authentication
