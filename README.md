# ⚙️ Djournal-List API (Backend)

The RESTful API backend powering the **Djournal-List** task management application. Built with Node.js and Express, this API handles user authentication, data persistence, and business logic using a clean, scalable layered architecture.

## 🔗 Project Repositories
* **Frontend Repository:** [todo-list-frontend](https://github.com/Nurlianto-Aldi/todo-list-frontend)
* **Backend Repository:** You are here.

## 🏗️ Architecture Design (Layered Pattern)
This project breaks away from tightly coupled "Spaghetti Code" by implementing a strictly separated Layered Architecture:
1. **Routes:** Defines the API endpoints and delegates requests.
2. **Controllers:** Handles HTTP requests, responses, and user input validation.
3. **Services:** Contains the core business logic.
4. **Repositories:** The only layer responsible for direct database communication and querying.

## 🛠️ Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** PostgreSQL (Hosted on Koyeb)
* **Security:** JSON Web Token (JWT) for stateless authentication.
* **Middlewares:** `cors` for cross-origin requests, custom Auth Middleware for protected routes.

## 📡 Core API Endpoints

### Authentication
* `POST /auth/register` - Register a new user.
* `POST /auth/login` - Authenticate user and receive JWT.

### Tasks (Protected Routes - Requires Bearer Token)
* `GET /tasks` - Retrieve all tasks for the authenticated user.
* `POST /tasks` - Create a new task.
* `PATCH /tasks/:id` - Update task text.
* `PATCH /tasks/:id/complete` - Toggle task completion status.
* `DELETE /tasks/:id` - Delete a task.

## 💻 Local Development Setup

1. Clone the repository:
  ```
    git clone [https://github.com/Nurlianto-Aldi/todo-list-backend.git](https://github.com/Nurlianto-Aldi/todo-list-backend.git)
  ```
2. Install dependencies:
  ```
    cd todo-list-backend
    npm install
  ```
3. Create a `.env` file in the root directory and configure your variables:
  ```
    PORT=3000
    DB_HOST=your_postgres_host
    DB_USER=your_postgres_user
    DB_PASSWORD=your_postgres_password
    DB_NAME=your_db_name
    JWT_SECRET=your_super_secret_key
  ```
4. Start the development server (uses nodemon for hot-reloading):
  ```
    npm run dev
  ```
<details>

  <summary>
    🧠 Developer Notes & Approach (Click to expand)
  </summary>
  
  ### Pseudo Code & Development Approach
  **A. Preparation**
  1. Define the end-point contract
  
  **B. Initial Setup**
  1. Create the project's folder
  2. Initiate the npm into the project's folder
  3. Install the express into it
  4. Install nodemon and set it up (for hot reload)
  
  **C. App.js preparation**
  1. Create app.js file
  2. Define the body parser 
  3. Define the route at the app.js file
  4. Define the port that will be using
  
  **D. Architecture Preparation**
  1. Create "routes" folder -> Create tasks.js -> Setup router -> Connect to controller.
  2. Create "controllers" folder -> Create tasks.js -> Define HTTP handling -> Connect to services.
  3. Create "services" folder -> Create tasks.js -> Define business logic -> Connect to repositories.
  4. Create "repositories" folder -> Create tasks.js -> Define DB queries.
  
  **E. Database Setup**
  1. PostgreSQL and DBeaver Setup.
  2. Environment Variable Configuration (`dotenv`).
  
  **F. Connecting to the Real Database**
  1. Change repositories function from fake database to real database.
  2. Install CORS and configure in `app.js`.
  
  **G. Authentication & Security Setup**
  1. Create `users` schema in PostgreSQL (id, email, password, created_at).
  2. Install `bcrypt` for password hashing and `jsonwebtoken` for stateless sessions.
  3. Build Auth layered architecture (Routes -> Controllers -> Services -> Repositories) for Login and Register logic.
  4. Create custom `authMiddleware` to verify JWT and protect private routes.
  
  **H. Data Relational Mapping**
  1. Alter `tasks` table to include `user_id` as a Foreign Key.
  2. Update Task Repositories to filter `GET`, `PATCH`, and `DELETE` queries strictly by the authenticated `user_id` extracted from the JWT token.  
  
  **I. Production Deployment**
  1. Ensure the app binds to dynamic ports (`process.env.PORT`).
  2. Deploy the PostgreSQL database and Express app to Koyeb.
  3. Configure production Environment Variables in the Koyeb dashboard.
  4. Test live API endpoints via Postman / Frontend integration.  

</details>