FROM node:20-alpine3.20
WORKDIR /app
COPY . .
WORKDIR /app/frontend
RUN npm install
RUN npm run build
EXPOSE 4173
CMD ["npm", "run", "preview"] 
