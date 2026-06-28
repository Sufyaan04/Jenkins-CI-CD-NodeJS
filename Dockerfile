# FROM node:18

# WORKDIR /app

# COPY . .

# RUN npm install

# CMD [ "node" "app.js" ]

FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]

