# RBAC (Role-Based Access Control) System

A Role-Based Access Control (RBAC) system built with Node.js, Express, and MongoDB. This project includes user authentication with JWT, role-based access control, rate limiting, secure HTTP headers with Helmet, and request logging with Morgan.

## Features

- **User Authentication**: Secure login and registration with JWT tokens.
- **Role-Based Access Control**: Protects routes based on user roles (e.g., admin, user).
- **Rate Limiting**: Prevents abuse by limiting requests to 5 per minute.
- **Helmet**: Sets secure HTTP headers to protect against various vulnerabilities.
- **Morgan**: Logs HTTP requests to the console for better visibility and debugging.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SmitaAmrutkar/rbac-system.git
