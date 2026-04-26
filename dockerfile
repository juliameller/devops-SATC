FROM node:20-alpine
RUN apk update && apk upgrade
WORKDIR /app
COPY . .
WORKDIR /app/frontend
RUN npm ci
RUN npm run build
EXPOSE 4173
CMD ["npm", "run", "preview"] 
