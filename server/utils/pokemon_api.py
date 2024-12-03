import requests

def fetch_pokemonapi(endpoint):
    """
    This fetches data from PokeAPI site dynamically
    :param endpoint: The specific endpoint to hit (ex: pokemon/{name})
    :return: returns tuple of json response and status code
    """

    BASE_URL = "http://pokeapi.co/api/v2"
    url = BASE_URL + endpoint

    try:
        response = requests.get(url)
        return response.json(), response.status_code
    except requests.RequestException as e:
        return {"error": str(e)}, 500

