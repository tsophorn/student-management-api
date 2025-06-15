# Student Management Core API
Web API using Express.js and Node.js  for School project.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (version 16 or higher recommended)  
  Install from [https://nodejs.org/](https://nodejs.org/)  
  Verify installation with:
  ```bash
  node -v
  npm -v


## Installation
### Step 1: Node.js is installed:
node -v
npm -v

###  Step 2: Install dependencies:
npm install

###  Step 3: Initialize a Node.js Project
npm init -y

### Step 4: Setup environment variables

Create a `.env` file in the root directory and add the following:

```env
DB_USERNAME=root
DB_PASSWORD=root
DB_DATABASE=student_management
DB_PORT=3307
DB_HOST=localhost

JWT_SECRET=your_jwt_secret
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
```

### Step 5: Start project 
npm run dev

### Testing the API
Use Postman or any API client to test your endpoints.







