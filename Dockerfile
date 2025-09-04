FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json .

RUN npm install --force

COPY . .

RUN npm run build

RUN pwd

RUN find

##

FROM softwareshinobi/react-nginx-template AS production

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
