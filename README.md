# Role-Based Access Control (RBAC) System

This is a simple implementation of a Role-Based Access Control (RBAC) system using Node.js, Express.js, MongoDB, JWT, and other security features like rate limiting, Helmet, and Morgan.

## Features

- **User Registration & Login**: Users can register and log in using JWT for authentication.
- **Role-Based Access Control**: Access to certain routes is restricted based on user roles (e.g., admin or user).
- **Rate Limiting**: Limits the number of requests from a single IP to avoid abuse.
- **Security Headers**: Helmet is used to set secure HTTP headers to enhance security.
- **Request Logging**: Morgan is used to log incoming requests for better monitoring and debugging.

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Tokens)
- Rate Limiting (express-rate-limit)
- Helmet
- Morgan

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SmitaAmrutkar/rbac-system.git
