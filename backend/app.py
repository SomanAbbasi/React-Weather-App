import os
from flask import Flask, jsonify, request
import requests
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)  #Enable for all routes

# Use your generated API key here
API_KEY = os.getenv('API_KEY')
BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

@app.route('/api/weather', methods=['GET'])
def get_weather():
    city=request.args.get('city')
    if not city:
        return jsonify({"error":"City Parameter is required."}),400
    
    
    complete_url = f"{BASE_URL}?q={city}&appid={API_KEY}&units=metric"
    response = requests.get(complete_url)
    #print(response)
    if response.status_code == 200:
        data = response.json()
        weather_data={
            'city': data['name'],
            'temperature': data['main']['temp'],
            'description': data['weather'][0]['description'],
            'icon': data['weather'][0]['icon'],
            'humidity': data['main']['humidity'],
            'wind_speed': data['wind']['speed'],
            'feels_like': data['main']['feels_like'],
            'temp_min': data['main']['temp_min'],
            'temp_max': data['main']['temp_max'],
            'pressure': data['main']['pressure']
        }
        
        return jsonify(weather_data)
    
    
    else:
        return jsonify({"error": "City not found"}), 404


if __name__ == '__main__':
    app.run(debug=True)
