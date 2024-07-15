from flask import Flask, make_response, jsonify
# from data import data


app = Flask(__name__)

@app.route('/user')
def get_user():
    return {'user': 'Paula Abdul'}

@app.route('/users')
def get_users():
    users = [
        {
            'id': 1,
            'status': 'active',
            'name': 'Paula Abdul',
            'hobbies': ['singing', 'dancing'],
            'groups': ['trekking', 'cooking'],
            'interests': ['music', 'sports'],
            'about': 'I am a singer and dancer',
            'imageUrl': 'https://avatar.iran.liara.run/public'
        },
        {
            'id': 2,
            'status': 'active',
            'name': 'Jimmy Abdul',
            'hobbies': ['singing', 'dancing'],
            'groups': ['trekking', 'cooking'],
            'interests': ['music', 'sports'],
            'about': 'I am a singer and dancer',
            'imageUrl': 'https://avatar.iran.liara.run/public'
        },
        {
            'id': 3,
            'status': 'inactive',
            'name': 'Henry Abdul',
            'hobbies': ['singing', 'dancing'],
            'groups': ['trekking', 'cooking'],
            'interests': ['music', 'sports'],
            'about': 'I am a singer and dancer',
            'imageUrl': 'https://avatar.iran.liara.run/public'
        },
    ]
    return make_response(jsonify(users), 200)

