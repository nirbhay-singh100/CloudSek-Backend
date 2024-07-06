# Application walkthrough
[![watch-video](https://cdn.loom.com/sessions/thumbnails/caaafd2ac1ed41c783a69845340fbec3-with-play.gif)](https://www.loom.com/share/caaafd2ac1ed41c783a69845340fbec3?sid=d5e5e2a2-16af-4c14-b0ce-2334f2115656)


# Architecture
![Design](https://github.com/nirbhay-singh100/CloudSek-Backend/assets/112863228/89be74bd-142d-4df3-b0c2-09b377188049)

# Documentation Link
[Click Here ](https://documenter.getpostman.com/view/30888392/2sA3e1AA2t)

# Prequisites
- Install [Node.js](https://nodejs.org/en)
- Account on MongoDB Atlas (Free Tier)

# Configuring MongoDB Atlas
- After the account is created, Go to the 'Database Access' in Left Navbar and create new user. Please remember the username and password.

# Getting Started
### Clone the repository
```
git clone https://github.com/nirbhay-singh100/CloudSek-Backend.git
```
### Navigate through Client
```
cd cloudSek-Backend/client
```

### Install dependencies
```
npm install
```

### Run the client
```
npm start
```

### Open another terminal
### Navigate through server
```
cd cloudSek-Backend/server
```
### Install dependencies
```
npm install
```
### Make a .env file by referring through .env.example
   - In DB_HOST put the credentials created in MongoDB Atlas
   - Give any name to DB_NAME
   - Give any random string for SECRET_KEY
### Run the server
```
nodemon app.js
```




  

