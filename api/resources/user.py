from flask_restx import Resource, reqparse
from flask_jwt_extended.utils import create_access_token, create_refresh_token

from api.models.user import UserModel


_user_parser = reqparse.RequestParser()
_user_parser.add_argument('username', type=str, required=True, help="Username for the new user.")
_user_parser.add_argument('password', type=str, required=True, help="Password for the new user.")


class UserRegister(Resource):
    def post(self):
        data = _user_parser.parse_args()
        
        user = UserModel.find_by_username(data['username'])
        if user:
            return {'message': f'A user with the username "{data["username"]}" already exists.'}, 400
        
        user = UserModel(**data)
        user.save_to_db()

        return user.json(), 201


class User(Resource):
    @classmethod
    def get(cls):
        data = _user_parser.parse_args()
        user = UserModel.find_by_username(data['username'])
        if not user:
            return {'message': f"User with username {data['username']} not found."}, 404
        if user.password != data['password']:
            return {'message': f"Password was incorrect."}, 400
            
        return user.json(), 200

    @classmethod
    def delete(cls):
        data = _user_parser.parse_args()
        user = UserModel.find_by_username(data['username'])
        if not user:
            return {'message': f"User with username {data['username']} not found."}, 404
            
        if user.password != data['password']:
            return {'message': f"Password was incorrect"}, 400

        user.delete_from_db()    
        return {'message': f"User with id {data['username']} was deleted."}, 200


class UserLogin(Resource):
    @classmethod
    def post(cls):
        data = _user_parser.parse_args()
        user = UserModel.find_by_username(data['username'])
        if not user:
            return {'message': f"User with username {data['username']} not found."}, 404
            
        if user.password != data['password']:
            return {'message': f"Password was incorrect"}, 400
        
        access_token = create_access_token(identity=user.id, fresh=True)
        refresh_token = create_refresh_token(identity=user.id)
        return {
            'access_token': access_token,
            'refresh_token': refresh_token
        }, 200
