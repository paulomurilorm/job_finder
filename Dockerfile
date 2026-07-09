FROM node:24

WORKDIR /app

RUN apt-get update && apt-get install -y python3 build-essential

COPY backend/package*.json ./backend/

RUN cd backend && npm install && npm rebuild sqlite3 --build-from-source

COPY . .

EXPOSE 3000

CMD ["npm", "start", "--prefix", "backend"]