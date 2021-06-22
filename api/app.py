from flask import Flask
from flask_restx import Api
from flask_cors import CORS

from config import DB_URI
from api.resources.user import User, UserRegister
from api.resources.favorite import Favorite


def create_app():
    app = Flask(__name__)
    CORS(app)

    # tell SQLAlchemy where to find the database
    app.config['SQLALCHEMY_DATABASE_URI'] = DB_URI

    # turn off flask_sqlalchemy modification tracker so we can use SQLAlchemy's mod tracker, which is better
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 
    
    api = Api(app, prefix="/api", doc="/api")
    api.add_resource(User,         '/user/<int:user_id>')
    api.add_resource(UserRegister, '/register')
    api.add_resource(Favorite,     '/favorite')
    
    return app
