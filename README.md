# Hotel Booking App

This is a Hotel Booking Application built using the MERN stack (MongoDB, Express.js, React, Node.js). The application allows users to search for hotels, view details, and book rooms.

## Features

- **User Authentication:** Secure user authentication and authorization using JWT.
- **Hotel Search:** Search functionality to find hotels based on location, availability, and other criteria.
- **Booking Management:** Book and manage hotel reservations.
- **Responsive Design:** Mobile-friendly interface.

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **Styling:** CSS, Bootstrap

## Installation

Follow these steps to run the application locally:

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running.

### Backend Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/hotel-booking-app.git
    cd hotel-booking-app
    ```

2. Navigate to the `api` directory:
    ```sh
    cd api
    ```

3. Install backend dependencies:
    ```sh
    npm install
    ```

4. Create a `.env` file in the `api` directory and add your environment variables:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

5. Start the backend server:
    ```sh
    npm start
    ```

### Frontend Setup

1. Open a new terminal window/tab and navigate to the `client` directory:
    ```sh
    cd client
    ```

2. Install frontend dependencies:
    ```sh
    npm install
    ```

3. Start the frontend development server:
    ```sh
    npm start
    ```

The application should now be running on [http://localhost:3000](http://localhost:3000) and the backend on [http://localhost:5000](http://localhost:5000).

## Usage

- Register or log in to the application.
- Use the search bar to find hotels by location and other criteria.
- View hotel details and available rooms.
- Book a room and manage your reservations.
