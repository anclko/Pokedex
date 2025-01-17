from flask import Flask
from routes.pokemon import pokemon_bp
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

#calling all the routes on here
app.register_blueprint(pokemon_bp)

#landing page just to display if it works
@app.route('/')
def home():
    return ({"message": "Welcome to the Pokedex!"})

if __name__ == '__main__':
    app.run(debug=True)
