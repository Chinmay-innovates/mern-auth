# Authentication Flow in Node.js with bcrypt, dotenv, ejs, express, mongoose, and nodemon

This guide walks you through how to set up a basic authentication flow using Node.js with several popular packages: `bcrypt`, `dotenv`, `ejs`, `express`, `mongoose`, and `nodemon`. These packages are used to implement password hashing, environment variables, and basic user authentication.

### Prerequisites
Before we start, ensure that you have the following packages installed in your project:

```json
{
  "scripts": {
    "start": "nodemon src/index.js"
  },
  "dependencies": {
    "bcrypt": "^5.1.1",
    "dotenv": "^16.4.5",
    "ejs": "^3.1.10",
    "express": "^4.21.1",
    "mongoose": "^8.8.2"
  },
  "devDependencies": {
    "nodemon": "^3.1.7"
  }
}
```
### Cloning the repository

```shell
git clone https://github.com/Chinmay-innovates/mern-auth.git
```

### Start the app

```shell
npm start
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `start`   | Starts a development instance of the app |
