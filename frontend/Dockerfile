FROM node:19.7.0-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies including serve
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite application
RUN npm run build

# Install serve globally if needed
RUN npm install -g serve

# Expose the port that serve will use
EXPOSE 3000

# Serve the application
CMD [ "serve", "-s", "dist" ]
