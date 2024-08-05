# from .app import app

# __all__ = (app,)

from flask import Flask
import os

def create_app():
    flask_app = Flask(__name__)

    flask_app.config.from_mapping(
        DATABASE=os.path.join(flask_app.instance_path, 'database.db'), # places database.db in hi5ive/instance
    )

    # import routes from app.py, registering them with this flask_app
    from . import app
    flask_app.register_blueprint(app.bp)

    from . import db #* register teardown?

    return flask_app