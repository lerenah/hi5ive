from flask import Flask
import os

app = Flask(__name__)

@app.route('/user')
def get_user():
    return {'user': 'Paula Abdul'}

