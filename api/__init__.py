# from .app import app

# __all__ = (app,)

from flask import Flask
import os

def create_app():
    flask_app = Flask(__name__)

    flask_app.config.from_mapping(
        DATABASE=os.path.join(flask_app.instance_path, 'database.db'),
    )

    from . import app
    flask_app.register_blueprint(app.bp)

    from . import db

    return flask_app