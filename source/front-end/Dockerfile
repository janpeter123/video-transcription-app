# Use a lightweight Node.js image for building the app
FROM node:14-alpine AS build

# Create and set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY . .

# Build the app
RUN npm run build

# Use a lightweight Nginx image for serving the app
FROM nginx:alpine

# Copy the build output from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port used by Nginx
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
