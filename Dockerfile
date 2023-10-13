# Use an official Node.js runtime as the base image
FROM node:14 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the React application
RUN npm run build

# Use an official Nginx web server runtime as the base image
FROM nginx:alpine

# Copy the built React app from the build stage to the Nginx web server directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start the Nginx web server
CMD ["nginx", "-g", "daemon off;"]
