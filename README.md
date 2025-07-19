# Ad-Campaign-Optimizer 🎯

A full-stack web application that simulates and stores digital ad campaign performance across platforms like Google and Facebook. Built with **HTML, CSS, JavaScript**, **Node.js**, **Express.js**, **MongoDB**, and **Chart.js**.

## 📊 Overview
This tool helps users visualize how ad budget and platform choices impact clicks and impressions. The frontend simulates performance, while the backend stores and retrieves campaign data using a RESTful API.

---


## 🔧 Features
- 🔢 Budget-based performance simulation
- 💡 Platform-specific logic (Google vs Facebook)
- 📈 Real-time chart visualization using Chart.js
- 🧠 Backend API built with Express.js
- 🗂️ MongoDB integration to store campaign data
- 💾 LocalStorage fallback for offline use
- ✅ RESTful endpoints for fetching/saving data
- 📱 Responsive UI

---

## 🛠️ Tech Stack

### Frontend
- HTML5, CSS3, JavaScript
- Chart.js
- LocalStorage API (for offline cache)

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv (for environment variables)

---

---

## 🌐 Live Demo
_((https://adoptimizer-tool.netlify.app/))_

---

## 🧑‍💻 Created by
**Manasa Chinthalapally**

---

## 🚀 Setup Instructions

### 🔃 Clone the Repo
```bash
git clone https://github.com/Manasa869/Ad-Campaign-Optimizer.git
cd Ad-Campaign-Optimizer

## 🚀 Setup Instructions

### ▶️ Start Backend Server

```bash
cd backend
npm install
node server.js

Make sure MongoDB is running and you have a .env file in the /backend folder with the following:

MONGO_URI=your_mongodb_connection_string
PORT=5000

###💻 Run Frontend
Use the Live Server extension in Visual Studio Code to open:

frontend/AdOptimizer.html

###📬 Contributions & Feedback
Open to improvements! Feel free to:

⭐ Star the repo

🐛 Raise an issue

📥 Submit a pull request

