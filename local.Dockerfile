# Development Dockerfile used with docker-compose 
FROM node:current-slim

WORKDIR /app

# Copy package.json and package-lock.json files first
COPY package*.json ./

# Install global and app dependencies
RUN yarn global add typescript
RUN yarn global add tsx
RUN yarn install

# Bundle app source
COPY . .

RUN chmod +x /app/scripts/docker/local-run.sh

EXPOSE 8080