from flask import Flask
from server.routes.pokemon_general import pokemon_bp

app = Flask(__name__)

#calling all the routes on here
app.register_blueprint(pokemon_bp)

landing page just to display if it works
@app.route('/')
def home():
    return ({"message": "Welcome to the Pokedex!"})

if __name__ == '__main__':
    app.run(debug=True)
