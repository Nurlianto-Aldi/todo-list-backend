# djournal-list.com

# Pseudo Code for To-Do List App Backend

## A. Preparation
1. Define the end-point contract

## B. Initial Setup
1. Create the project's folder
2. Initiate the npm into the project's folder
3. Install the express into it
4. Install nodemon and set it up (for hot reload)

## C. App.js preparation
1. Create app.js file
2. Define the body parser 
3. Define the route at the app.js file
4. Define the port that will be using

## D. Architecture Preparation
1. Create "routes" folder
    - Create tasks.js file inside the folder
    - Setup the router
    - Define the end-point contract
    - Connect to the controller
2. Create "controllers" folder
    - Create tasks.js file inside the folder
    - Define the controller's function and export
    - Connect to the services
3. Create "services" folder
    - Create tasks.js file inside the folder
    - Define the services's function
    - Connect to the repositories and export
4. Create "repositories" folder
    - Create tasks.js file inside the folder
    - Create dummy database
    - Define the repositories function and export
    - Connect to the fake database
5. The function should be match with the API contract

## E. Database Setup
### PostgreSQL and Dbeaver Setup
1. Make sure PostgreSQL is running
2. Create the database in DBeaver
3. Create new database with the schema (id, task, created_at)

### .ENV Setup
1. Install dotenv as the translator
2. Create .env file and fill it with the necessary information 
3. Load environment variable at app.js
4. Create db.js file at config folder
5. Create a connection instance at db.js and export

## F. Connecting to the Real Database
1. Change repositories function from fake database to real database
2. Install cors and set it up at app.js
3. 


