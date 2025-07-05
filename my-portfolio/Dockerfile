# Use the official Node.js 18 Alpine image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only package.json and lock file to leverage Docker's cache
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all project files to the working directory
COPY . .

# Build the Next.js application (creates the .next directory)
RUN npm run build

# Expose the port the application will run on
EXPOSE 3000

# Start the application in production mode
CMD ["npm", "run", "start"]
