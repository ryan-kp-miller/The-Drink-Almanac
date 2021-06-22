from flask_restx import Resource, reqparse
from api.models.favorite import FavoriteModel

parser = reqparse.RequestParser()
parser.add_argument('user_id',  int, required=True, help="The id of the user that is favoriting the drink")
parser.add_argument('drink_id', int, required=True, help="The id of the drink that is being favorited")

class Favorite(Resource):
    def get(self):
        data = parser.parse_args()
        favorite = FavoriteModel.find_by_user_and_drink_ids(**data)
        if favorite:
            return favorite.json(), 200
        return {'message': f'Favorite not found'}, 404

    def post(self):
        data = parser.parse_args()
        favorite = FavoriteModel.find_by_user_and_drink_ids(**data)
        if favorite:
            return {'message': 'The user has already favorited this drink'}
        favorite = FavoriteModel(**data)
        favorite.save_to_db()
        return favorite.json(), 201

    def delete(self):
        data = parser.parse_args()
        favorite = FavoriteModel.find_by_user_and_drink_ids(**data)
        if favorite:
            favorite.delete_from_db()
            return {'message': f'The favorite was deleted from the DB'}, 200
        return {'message': f'Favorite not found'}, 404
