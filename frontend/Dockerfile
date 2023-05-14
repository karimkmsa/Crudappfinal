# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory to /app
WORKDIR /app


# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Copy the current directory contents into the container at /app
COPY . .

# Install any needed packages
RUN npm install

# Expose port 3000 for the container
EXPOSE 3000

# Run the command to start the app
CMD ["node", "js/node.js"]