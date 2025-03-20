# User Management REST API

A simple RESTful API with CRUD operations for managing users, built using **Node.js**, **Express**, and **MongoDB** with **EJS** for frontend rendering.

## Setup Instructions

### Prerequisites
- Node.js installed ([Download Here](https://nodejs.org/))
- MongoDB installed and running on **localhost**

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-repo/user-management.git
   cd user-management
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory and add:
     ```env
     PORT=3000
     MONGO_URI=mongodb://localhost:27017/userDB
     ```

4. **Start the server:**
   ```sh
   node app.js
   ```
   The app will run at `http://localhost:3000`

## API Endpoints Documentation

### 1. Get All Users
**Endpoint:** `GET /users`
- **Response:**
  ```json
  [
    {
      "_id": "60d5f1b2c2b4a62d98a3f2b7",
      "name": "John Doe",
      "email": "john@example.com",
      "age": 25
    }
  ]
  ```

### 2. Get a Single User
**Endpoint:** `GET /users/:id`
- **Example Request:** `GET /users/60d5f1b2c2b4a62d98a3f2b7`
- **Response:**
  ```json
  {
    "_id": "60d5f1b2c2b4a62d98a3f2b7",
    "name": "John Doe",
    "email": "john@example.com",
    "age": 25
  }
  ```

### 3. Create a User
**Endpoint:** `POST /users`
- **Request Body:**
  ```json
  {
    "name": "Alice Brown",
    "email": "alice@example.com",
    "age": 30
  }
  ```
- **Response:** Redirects to `/users`

### 4. Update a User
**Endpoint:** `PUT /users/:id`
- **Example Request:** `PUT /users/60d5f1b2c2b4a62d98a3f2b7`
- **Request Body:**
  ```json
  {
    "name": "John Smith",
    "email": "johnsmith@example.com",
    "age": 28
  }
  ```
- **Response:** Redirects to `/users`

### 5. Delete a User
**Endpoint:** `DELETE /users/:id`
- **Example Request:** `DELETE /users/60d5f1b2c2b4a62d98a3f2b7`
- **Response:** Redirects to `/users`

## Frontend Views
- `GET /` → Redirects to `/users`
- `GET /users/new` → Displays user creation form
- `GET /users/edit/:id` → Displays user edit form


