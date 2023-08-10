# Stage 1: Build the Nest.js application
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Nest.js application
RUN npm run build

# Stage 2: Create a smaller production-ready image
FROM node:14-alpine AS production

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist

# Install only production dependencies
RUN npm install --production

# Expose the desired port (replace 3000 with your Nest.js app's port)
EXPOSE 3000

# Start the Nest.js application
CMD ["node", "dist/main"]

# Optionally, you can set environment variables here if needed
# ENV NODE_ENV=production
# ENV PORT=3000
