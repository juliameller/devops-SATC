FROM node:24-alpine
# RUN apk update && apk upgrade
# WORKDIR /app
# COPY . .
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend ./
RUN npm run build
# USER node
EXPOSE 4173
CMD ["npm", "run", "preview"] 
