FROM node:current-slim

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install global and app dependencies
RUN yarn global add typescript
RUN yarn global add tsx
RUN yarn install

# Bundle app source
COPY . .

# Build the TypeScript files
RUN yarn build

# Expose port 8080
EXPOSE 8080

# Run migrations
CMD yarn typeorm migration:run -d build/db/data-source.js

# Start the app
CMD yarn start
