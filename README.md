# lbtodo
a task management app in Loopback 3 and Ember.js

## 🚀 Setup 
### Prerequisites
* A running PostgreSQL server
* This project is built on Node 16.16.0

### 🖥️ Running on Local Machine
1. Install dependencies

   `npm install && npm run deps`

3. Generate database settings

   `cd api/server`
   
   `cp datasources.json datasources.local.json`

5. Modify database settings
   
   Change `datasources.local.json` to the appropriate values based on your database setup

6. Run the project at the project root

   `npm start`

### 📦 Running on Docker
Simply run `docker compose up --build` at the project root.

### Accessing the webapps
By default, the api is accessible via `localhost:3000`, and the web is accessible via `localhost:4200`
