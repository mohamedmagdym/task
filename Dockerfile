from node:14-alpine
workdir /app
copy finalltask.js package.json .
RUN npm install
COPY . .
EXPOSE 5000
CMD node finalltask.js