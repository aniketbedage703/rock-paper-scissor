Rock Paper Scisser:
A simple and interactive Rock Paper Scissors web game developed using HTML, CSS, JavaScript, and
Python Flask.

Live Demo:
https://rock-paper-scissor-1-5a84.onrender.com

GitHub Repository:
https://github.com/aniketbedage703/rock-paper-scissor

Features:
• Rock, Paper, and Scissors choices
• Player vs Computer
• Best of 5 - exactly 5 rounds
• Score tracking
• Draw rounds
• Game history
• New Game button
• Responsive design
• Deployed on Render

Technologies Used:
HTML5, CSS3, JavaScript, Python, Flask, Gunicorn, Render

Project Structure:
rock-paper-scissor/
|
+-- app.py
+-- requirements.txt
|
+-- templates/
| +-- index.html
|
+-- static/
 +-- style.css
 +-- script.js
 
How the Game Works:
1. Select Rock, Paper, or Scissors.
2. The computer randomly selects its move.
3. The round result is displayed.
4. The score is updated
5. A draw counts as one round but does not increase either score.
6. The game continues for 5 rounds.
7. After 5 rounds, the final score determines the match winner.
   
Winning Rules:
Rock vs Scissors = Player Wins
Paper vs Rock = Player Wins
Scissors vs Paper = Player Wins
Same Choice vs Same Choice = Draw

Run Locally:
Clone the repository:
git clone https://github.com/aniketbedage703/rock-paper-scissor.git

Open the project:
cd rock-paper-scissor

Install requirements:
pip install -r requirements.txt

Run the Flask application:
python app.py

Open in browser:
http://127.0.0.1:5000

Deployment
This project is deployed using Render.

Build Command:
pip install -r requirements.txt

Start Command:
gunicorn app:app

Project Objective
The objective of this project is to create a simple web-based Rock Paper Scissors game and demonstrate
frontend development, JavaScript game logic, Python Flask, score management, game history, and web
deployment.

Author:
Aniket Bedage
BCA Student

License:
This project is created for educational and learning purposes.
