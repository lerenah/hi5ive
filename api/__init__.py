# from .app import app

# __all__ = (app,)

from flask import Flask

def create_app():
    flask_app = Flask(__name__)

    from . import app
    flask_app.register_blueprint(app.bp)

    return flask_app