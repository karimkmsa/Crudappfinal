# Crudappfinal

This is a project showcasing a RESTful API built with Node.js and Express.js, along with a user-friendly frontend built with Bootstrap. The project includes a Docker Compose file for easy deployment.

## Getting Started

To get started, follow these steps:

1. Clone the repository to your local machine:-

        git clone https://github.com/karimkmsa/Crudappfinal.git

2. Navigate to the cloned repository:-

        cd Crudappfinal

3. Start the Docker containers:-

        docker-compose up

4. Wait a minute or so until the application starts up. Once it's ready, you can access it by visiting the following link in your web browser.

        http://localhost:5000/. to run api 
        http://localhost:3000/. to run frontend 

## Features

This project includes a RESTful API with the following endpoints:

- GET /persons: Retrieve a list of all person objects.
- POST /persons: Create a new person object.
- PUT /persons/{id}:  Update a specific person object by its ID.
- DELETE /persons/{id}:  Delete a specific person object by its ID.


The project also includes a user-friendly frontend built with Bootstrap, HTML and Js, which allows you to view all users, add a new user, edit an existing user, and delete a user.

## Technologies Used
- Node.js
- Express.js
- cors
- Docker
- Docker Compose
- Bootstrap
