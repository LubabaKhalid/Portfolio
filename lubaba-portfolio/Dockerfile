# Use an official Node.js image as the base
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app (uncomment if using a build step, e.g., React/Next.js/Vue)
# RUN npm run build

# Expose the port the app runs on (change if needed)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]