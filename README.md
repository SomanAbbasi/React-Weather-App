# 🌦️ React + Flask Weather Dashboard

A modern, responsive **Weather Dashboard** built with **React (Vite)** for the frontend and **Flask** for the backend.  
It features animated weather cards, live weather updates from OpenWeather API.

<img width="1920" height="1200" alt="Screenshot (32)" src="https://github.com/user-attachments/assets/2e1b13da-5ddf-422a-9295-8e719f6dccd6" />


---

## 🚀 Features

- **Real-time weather data** powered by OpenWeather API
- **Dynamic background** 
- **Extra weather info**: humidity, wind speed, feels-like, sunrise, sunset
- **Weather types**: Sunny 🌞, Cloudy ☁️, Rainy 🌧️
- **Single command** to run backend & frontend together (`npm run dev:all`)

---

## 🛠️ Tech Stack

**Frontend**  
- React (Vite) ⚡
- Material UI & Custom CSS  
- Axios (API requests)  
- React Icons (Weather Icons)  

**Backend**  
- Flask (Python)  
- Flask-CORS (CORS handling)  
- Requests (API calls)  
- python-dotenv (Environment variables)  

---


---

## 🔑 Environment Variables

In the `backend/.env` file, set your **OpenWeather API key**:

```env
API_KEY=527e1d58732fa0678a763471509f1907

📦 Installation

1️⃣ Clone Repository
git clone https://github.com/SomanAbbasi/React-Weather-App
cd React-Weather-App

2️⃣ Backend Setup
cd backend
python -m venv venv
venv\Scripts\activate    # Windows
# or
source venv/bin/activate # Mac/Linux

pip install -r requirements.txt

3️⃣ Frontend Setup
cd ../frontend
npm install

▶️ Running the App
You can run both frontend & backend together:
cd frontend
npm run dev:all

🙌 Credits
Original version by [Marsad Irfan](https://github.com/marsadirfan)  
Improved & updated by [Soman Abbasi](https://github.com/SomanAbbasi)  





