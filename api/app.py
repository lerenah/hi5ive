from flask import Flask, make_response, jsonify
import requests

def generate_avatar_url():
    response = requests.get('https://randomuser.me/api/')
    data = response.json()
    return data['results'][0]['picture']['large']

users = [
        {
            'id': 1,
            'status': 'active',
            'name': 'Paula Abdul',
            'hobbies': ['singing', 'dancing'],
            'groups': ['trekking', 'cooking'],
            'interests': ['music', 'sports'],
            'about': 'I am a singer and dancer',
            'imageUrl': generate_avatar_url()
        },
        {
            'id': 2,
            'status': 'active',
            'name': 'Jimmy Abdul',
            'hobbies': ['singing', 'dancing'],
            'groups': ['trekking', 'cooking'],
            'interests': ['music', 'sports'],
            'about': 'I wish I was Paula Abdul\'s brother',
            'imageUrl': generate_avatar_url()
        },
        {
            'id': 3,
            'status': 'inactive',
            'name': 'Henry Abdul',
            'hobbies': ['singing', 'dancing'],
            'groups': ['trekking', 'cooking'],
            'interests': ['music', 'sports'],
            'about': 'I am Paula Abdul\'s brother',
            'imageUrl': generate_avatar_url()
        },
        {
            'id': 4,
            'status': 'active',
            'name': 'Lenny Kravitz',
            'hobbies': ['singing', 'guitar'],
            'groups': ['trekking', 'cooking'],
            'interests': ['music', 'sports'],
            'about': 'I am a rockstar',
            'imageUrl': generate_avatar_url()
        },
        {
            'id': 5,
            'status': 'active',
            'name': 'Jimmy Hendrix',
            'hobbies': ['singing', 'guitar'],
            'groups': ['trekking', 'cooking'],
            'interests': ['music', 'sports'],
            'about': 'I am a rockstar',
            'imageUrl': generate_avatar_url()
        },
        {
            'id': 6,
            'status': 'inactive',
            'name': 'Hedy Lamar',
            'hobbies': ['singing', 'dancing'],
            'groups': ['trekking', 'cooking'],
            'interests': ['movies', 'sports'],
            'about': 'I am an actress',
            'imageUrl': generate_avatar_url()
        },
]

app = Flask(__name__)

@app.route('/user/<int:user_id>')
def get_user(user_id):
    user = None
    for user in users:
        if user['id'] == user_id:
            break

    if user:
        return make_response(jsonify(user), 200)
    else:
        return make_response(jsonify({'error': 'User not found'}), 404)

@app.route('/users')
def get_users():
    return make_response(jsonify(users), 200)

