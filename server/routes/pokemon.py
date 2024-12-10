from flask import Blueprint, jsonify
from utils.fetcher import fetch_api

pokemon_bp = Blueprint("pokemon", __name__)

@pokemon_bp.route("/pokemon/<name>", methods=["GET"])
def get_pokemon(name):
    """
    This function fetches information about a Pokémon by its name.
    :param name: The name of the Pokémon to retrieve.
    :return: A JSON response with information about the Pokémon or an error message if the pokemon is not found.
    """

    info, status = fetch_api(f"/pokemon/{name}")
    if status != 200:
        return jsonify({"error": "Pokemon not found!"}), status
    
    general = {
        "id": info["id"],
        "name": info["name"],
        "base_experience": info["base_experience"],
        "height": info["height"],
        "weight": info["weight"],
        "abilities": [ability["ability"]["name"] for ability in info["abilities"]],
        "types": [t["type"]["name"] for t in info["types"]],
        "sprites": info["sprites"]["front_default"],
    }
    
    return jsonify(general)