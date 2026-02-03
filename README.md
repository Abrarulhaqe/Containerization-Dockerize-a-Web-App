# 🚀 Dockerized Node.js Application with MongoDB

## 📌 Project Overview
This project demonstrates how to containerize a simple Node.js application using Docker with a multi-stage build and run it with MongoDB using Docker Compose.

---

## 🛠️ Tech Stack
- Node.js
- Express
- MongoDB
- Docker
- Docker Compose

---

## 📂 Project Structure

docker-node-app/
│── Dockerfile
│── docker-compose.yml
│── package.json
│── server.js
│── .dockerignore
│── README.md

---

## 🐳 Build Docker Image

docker build -t docker-node-app .

---

## 🐳 Run Application

docker-compose up --build

---

## 🌍 Access Application

http://localhost:3000

---

## 🧪 API Endpoints

GET /  
POST /add  
GET /users  

---

## 📦 Stop Containers

docker-compose down

---

## 🎯 Learning Outcomes
- Multi-stage Docker build
- Docker Compose multi-container setup
- MongoDB integration
- Persistent volumes

---

## 👨‍💻 Author
Your Name
