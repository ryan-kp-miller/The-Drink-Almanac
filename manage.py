import os
from api.app import create_app
from api.db import db
from flask.helpers import send_from_directory


app = create_app()

# before any request to the API, this function will be called 
# and will create the data.db file and all the tables within the db (unless they already exist)
@app.before_first_request
def create_tables():
    db.create_all()

db.init_app(app)

# reroute to index.html on error
@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

# set root route to be index.html in react build directory
@app.route('/')
def index():
    return app.send_from_directory(app.static_folder, 'index.html')


if __name__ == "__main__":
    app.run(
        debug=False, 
        port=os.environ.get('PORT', 5000)
    )
