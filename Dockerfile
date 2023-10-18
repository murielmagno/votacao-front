FROM node:alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

FROM node:alpine
WORKDIR /app
COPY --from=build /app .
RUN npm install
EXPOSE 4200
CMD npm run start
