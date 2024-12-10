from flask import Flask
from routes.pokemon import pokemon_bp

def register_routes(app):
    app.register_blueprint(pokemon_bp)
