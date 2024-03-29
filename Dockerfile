# Use an official Node.js runtime as the base image
FROM node:16

ARG DATABASE_URL
ARG NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
ARG STRIPE_SECRET_KEY

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the rest of the application to the working directory
COPY . .

RUN npm run build

# RUN printenv

# RUN echo "STRIPE_API_KEY: $STRIPE_API_KEY"
# CMD echo "STRIPE_API_KEY: $STRIPE_API_KEY"



# Make port 3000 available to the world outside this container
# EXPOSE 3000

# Define the command to run your app using CMD which defines your runtime
# CMD [ "npm", "start" ]
CMD ["npm", "start"]