from flask import Blueprint, jsonify
import requests

# creating a blueprint for the pokemon routes
pokemon_bp = Blueprint('pokemon', __name__)

@pokemon_bp.route('/pokemon/<name>', methods=['GET'])
def get_pokemon(name):
    try:
        #feeding the url needed with name converted as lower for consistnecy
        url = f"https://pokeapi.co/api/v2/pokemon/{name.lower()}"
        response = requests.get(url)

        #check if found
        if response.status_code != 200:
            return jsonify({"error": "Pokemon Not Found!"}, 404)

        #get all information and convert it
        return jsonify(response.json())
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500