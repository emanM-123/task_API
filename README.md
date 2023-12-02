# TASK API

## Overview

This project is a Node.js and MongoDB-based application that provides API endpoints for Task management. It includes features such as adding , updating information, deleting , and listing. Users need to be authenticated to perform certain actions.

## Features

- Add task:
  - Allows users to add a new task to the database.

- Update task:
  - Users can update existing task information.

- Delete task:
  - Provides the ability to delete a task from the database.

- View task:
  - Users can view a specific task by its ID.

- List tasks:
  - Lists all tasks stored in the database.

## Technologies Used

- Node.js
- MongoDB

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Create a `.env` file for environment variables.

## Environment Variables (.env)

Create a `.env` file in the root directory and set the following environment variables:


NODE_ENV=dev
NODE_PORT=4000


## Usage

## Features

- User Registration:
  - While registering, the user's password is encrypted using a 'pre' method.

- User Login:
  - User authentication through login.

- JWT Token Verification:
  - JWT (JSON Web Token) is used to verify user identity.

## API Endpoints

- **Endpoint**: POST http://localhost:4000/login
- **Request Body**: JSON object with task details.
{
    "user_name":"eman123",
    "password":"eman@123",
}
- **Endpoint**: POST http://localhost:4000/api/signup
- **Request Body**: JSON object with task details.
{
    "user_name":"eman123",
    "password":"eman@123",
    "email":"eman@gmail.com",
    "mobile":"1313131122",
    "name":"lkmerlkmglk",
    "gender":"female"
}
### Add a task

- **Endpoint**: POST http://localhost:4000/api/task/add
- **Request Body**: JSON object with task details.
{
    "task_name":"task demo",
    "description":"Lorem ipsum......",
    "due_date": ""
}

### Update a task

- **Endpoint**: POST http://localhost:4000/api/task/update
- **Request Body**: JSON object with updated task details.
{
    "task_id": "6548b21cf97493cc3e1129d6",
    "task_name":"task demo",
    "description":"Lorem ipsum updated......",
    "due_date": ""
}


### Delete a task

- **Endpoint**: POST http://localhost:4000/api/task/delete/:id

### View a task

- **Endpoint**: GET http://localhost:4000/api/task/:id  

### List tasks

- **Endpoint**: GET http://localhost:4000/api/task



## Usage

1. Run the application using `npm run dev`.
2. Access the application through your preferred web browser.
