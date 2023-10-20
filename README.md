````markdown
# Express API with Sequelize and SQLite

This is a simple Express.js REST API for managing user records, using Sequelize as the ORM and SQLite as the database. You can perform basic CRUD (Create, Read, Update, Delete) operations on user records.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Getting Started

### Prerequisites

Before running the API, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [SQLite](https://www.sqlite.org/index.html) (for the SQLite database)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ncbinh98/homebase-task-be.git
   cd homebase-task-be
   ```
````

2. Install the project dependencies:

   ```bash
   npm install
   ```

3. Start the Express API:

   ```bash
   npm start
   ```

The API should now be running on `http://localhost:3000`.

## Usage

Add .env file, you can find env-example
You can use tools like `curl`, [Postman](https://www.postman.com/), or [Insomnia](https://insomnia.rest/) to interact with the API. Here are the available API endpoints:

## API Endpoints

- **Create a User:**

  Send a POST request to `http://localhost:3000/users` with a JSON body containing user data.

  ```json
  {
    "name": "Binh",
    "email": "example@gmail.com"
  }
  ```

- **Get All Users:**

  Send a GET request to `http://localhost:3000/users`.

- **Get a User by ID:**

  Send a GET request to `http://localhost:3000/users/:id`, where `:id` is the ID of the user.

- **Update a User:**

  Send a PUT request to `http://localhost:3000/users/:id`, where `:id` is the ID of the user you want to update. Include the updated user data in the request body.

- **Delete a User:**

  Send a DELETE request to `http://localhost:3000/users/:id`, where `:id` is the ID of the user you want to delete.
