# 🕵️‍♂️ Cloak-Room

Cloak-Room is an **Anonymous ChatRoom Generator** that enables **real-time**, **secure**, and **scalable** chat functionality using multi-server architecture. Built using **Next.js**, **Socket.io**, **Kafka**, and **Docker**, it ensures fast, distributed, and reliable anonymous messaging.

---

## ✨ Features

* 🔒 Anonymous, secure room creation
* 💬 Real-time chat with WebSocket (Socket.io)
* 🌐 Multi-server scalability using Apache Kafka
* 🚀 Dockerized backend for containerized deployment
* 🧠 Intelligent Room Management
* 🎨 Clean UI with TailwindCSS

---

## 🧽 Guide – How It Works

1. **Get Signed Up**
   Sign in with your Google account to begin.

2. **Create or Choose a Chat Room**
   Click on `"Create Chat"` or select from existing chat rooms.

3. **Share & Chat**
   Click the chat, copy the link, paste it into any browser, and start chatting anonymously.

---

## 🚀 Getting Started

### 📦 Frontend

1. **Clone the repo & move into project folder**

   ```bash
   git clone https://github.com/your-username/cloak-room.git
   cd cloak-room/frontend
   ```

2. **Setup your `.env` file**

   Create a `.env` file in the `frontend` folder and set your credentials (e.g., NEXTAUTH\_SECRET, NEXTAUTH\_URL, etc.).

3. **Install dependencies & run the dev server**

   ```bash
   npm install
   npm run dev
   ```

---

### ⚙️ Backend

1. **Initialize Docker**

   Make sure [Docker](https://www.docker.com/products/docker-desktop) is installed and running.

2. **Setup PostgreSQL, Redis, Kafka with Docker**

   Ensure your Docker Compose or containers for **PostgreSQL**, **Redis**, and **Kafka** are up and running.

3. **Run the backend server**

   Navigate to the backend folder and start your Node.js/Express/Koa server:

   ```bash
   cd backend
   npm install
   npm start
   ```

---

## 🛠️ Tech Stack

### 📚 Frameworks & Libraries

* **Next.js** – React Framework
* **TypeScript** – Static Typing
* **Socket.io** – Real-time bidirectional communication

### 🖌️ UI & Styling

* **TailwindCSS** – Utility-first CSS

### 📃 Database & Messaging

* **PostgreSQL** – Primary database
* **Redis** – Caching and Pub/Sub
* **Apache Kafka** – Message broker for distributed messaging

### 🐳 DevOps & Infrastructure

* **Docker** – Containerization for scalable deployment
* **Docker Compose** – Multi-container orchestration

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📬 Contact

Feel free to reach out via [LinkedIn](https://linkedin.com/in/your-profile) or open an issue.

---
