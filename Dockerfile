FROM node:current-slim

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install global and app dependencies
RUN npm install -g typescript tsx
RUN npm install

# Bundle app source
COPY express-typescript-2024 .

# Build the TypeScript files
RUN npm run build

# Expose port 8080
EXPOSE 8080

# Start the app
CMD npm run start
