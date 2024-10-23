# Static Node.js and Express Site
 Treehouse TechDegree Unit 6 Project
---------------------- DONE ----------------------------
1. Initialize Your Project
Our first step is to setup a new Node project and add our dependencies:

Open the command line, navigate to your project directory, and run the command npm init to set up your package.json file.
Install the required dependencies through the command line. Your project will need Express and Pug.
Create a .gitignore file in your directory and save a reference to the node_modules folder so that your repo doesn't store or track that folder.

2. Add Your Images and Templates
We're going to prepare our application's visual content by creating an ﻿images folder for personal and project images, as well as incorporating the provided Pug templates.

Create an images folder in your directory to store your images.
Add a profile picture of yourself that you would feel comfortable sharing with potential employers. It should present well at 550px by 350px.
Take screenshots of your projects. You will need at least two screenshots for each project.
A main shot for the landing page which should be a square image that can display well at 550px by 550px.
Between one and three additional images that can be any dimensions you want, but work well in this project as landscape images that present well at 1200px by 550px.
Finally add the provided views folder with our Pug templates to the root of your project.
Note: You can use an online tool like PicResize to crop, edit and resize your photos.

3. Add Your Project Data
We're going to create and populate a ﻿data.json file at our project's root. This file will store key information about each project in our portfolio, forming the data backbone for our application.

Create a data.json file at the root of your directory
The recommended structure for your JSON is to create an object literal that contains a single property called projects. The value of projects is an array containing an object for each project you wish to include in your portfolio.
Each project object should contain the following properties:
id - give each project a unique id, which can just be a single digit number starting at 0 for the first project, 1 for the second project, etc.
project_name
description
technologies - an array of strings containing a list of the technologies used in the project
live_link - link to the live version of the project, which can be hosted for free on GitHub Pages.
github_link - link to the GitHub repo
image_urls - an array of strings containing file paths from the views folder to the images themselves. You'll need a main image to be shown on the landing page, and one to three images to be shown on the project page.
Note: Feel free to add extra projects to this portfolio if you have them to show off.



4. Setup Your Server, Routes and Middleware
Time to set up our Express.js server with necessary routes and middleware. This essential step enables efficient management of user requests and a dynamic UI.

Create an app.js file at the root of your directory.
Add variables to require the necessary dependencies. You'll need to require:
Express
Your data.json file
Optionally - the path module which can be used when setting the absolute path in the express.static function.
Set up your middleware:
set your “view engine” to “pug”
use a static route and the express.static method to serve the static files located in the public folder
Set your routes. You'll need:
An "index" route (/) to render the "Home" page with the locals set to data.projects
An "about" route (/about) to render the "About" page
Dynamic "project" routes (/project/:id or /projects/:id) based on the id of the project that render a customized version of the Pug project template to show off each project. Which means adding data, or "locals", as an object that contains data to be passed to the Pug template.
Finally, start your server. Your app should listen on port 3000, and log a string to the console that says which port the app is listening to.

