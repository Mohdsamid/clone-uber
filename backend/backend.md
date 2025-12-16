i will document by step by step process of building this clone app to practice.

1. first i create the backend folder to setup backend clearly
2. then i install node and express modules by this commands 'npm init -y' and 'npm i express'
3. then i create app.js file and set the expess module to our app
4. now we make server.js file to create a server for our web and add http to our app.js
5. then we install dotenv and cors by "npm i dotenv cors"


        🌱 dotenv
What it is:
dotenv is a library that loads variables from a .env file into your app’s environment (process.env).

Why it is used:
To store secrets and config safely, instead of hard-coding them.


        🌐 CORS (Cross-Origin Resource Sharing)
What it is:
CORS is a browser security rule that controls which frontend domains can access your backend API.

Problem it solves:
Frontend and backend often run on different ports: 

6. then we required dotenv and cors to app.js and put this in top to configure environmental variables first
then we set up the cors in app.js then we set PORT from env and make new file .env and make PORT variable in it and give value 4000 and use it in server.js file and make call back function and console "server is runnning"

7. now we change main file in package.json from "main" : "index.js", to "main" : "server.js"
this change the entry point of our website from  index.js to server.js
 
