# Stage 1: Build the Astro application
# Use a Node.js image for the build process. 'slim' is a good balance of size and functionality.
FROM node:20-slim AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and the lock file to leverage Docker's layer caching.
# This step only re-runs if these files change.
COPY package.json package-lock.json* ./

# Install all dependencies, including devDependencies needed for the build
RUN npm install

# Copy the rest of your application's source code
COPY . .

# Run the build script defined in your package.json
RUN npm run build

# Stage 2: Create the lean production image
# Start from a fresh, lightweight Node.js image
FROM node:20-slim

# Set the working directory
WORKDIR /app

# Copy package files again to install only production dependencies
COPY package.json package-lock.json* ./

# Install only production dependencies. This will include 'astro' for the preview server
# but exclude heavy build tools like 'typescript', 'sass', etc.
RUN npm install --production

# Copy the built static assets from the 'builder' stage
COPY --from=builder /app/dist ./dist

# Expose the port that the Astro preview server will run on inside the container.
# You will map this to a port on your host machine (e.g., -p 80:4321).
EXPOSE 4321

# The command to start the Astro preview server.
# We use '--host 0.0.0.0' to make the server accessible from outside the container.
CMD ["npx", "astro", "preview", "--host", "0.0.0.0"] 