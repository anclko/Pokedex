from flask import Flask
from routes.pokemon_routes import pokemon_bp

app = Flask(__name__)

#calling the blueprint
app.register_blueprint(pokemon_bp)

@app.route('/')
def home():
    return ({"message": "Welcome to the Pokedex!"})

if __name__ == '__main__':
    app.run(debug=True)
