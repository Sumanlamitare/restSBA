# Express App

## Description

This is a basic Express application that allows you to interact with different resources, such as **Users**, **Posts**, and **Comments**, through RESTful API routes.

## Instructions

1. **Add `/users` to the URL** to get a list of all users:
   - Example: `GET http://localhost:3000/users`

2. **Add `/users/:id` to the URL** to get a specific user by ID:
   - Example: `GET http://localhost:3000/users/1`

3. **Add `/posts` to the URL** to get a list of all posts:
   - Example: `GET http://localhost:3000/posts`

4. **Add `/posts/:id` to the URL** to get a specific post by ID:
   - Example: `GET http://localhost:3000/posts/1`

5. **Add `/comments` to the URL** to get a list of all comments:
   - Example: `GET http://localhost:3000/comments`

6. **Add `/comments/:id` to the URL** to get a specific comment by ID:
   - Example: `GET http://localhost:3000/comments/1`

## Example Usage

- **Get all users**: `GET /users`
  - Response: List of all users in JSON format.

- **Get a specific user**: `GET /users/:id`
  - Response: The user object with the given `id`.

- **Get all posts**: `GET /posts`
  - Response: List of all posts in JSON format.

- **Get a specific post**: `GET /posts/:id`
  - Response: The post object with the given `id`.

- **Get all comments**: `GET /comments`
  - Response: List of all comments in JSON format.

- **Get a specific comment**: `GET /comments/:id`
  - Response: The comment object with the given `id`.

## Error Handling

- **404 Not Found**: If a route doesn't exist or the requested resource (user, post, or comment) is not found, a `404` error will be returned with a message like `Route [requested route] not found`.

## Technologies Used

- **Node.js**
- **Express.js**
