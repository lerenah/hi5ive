from api.app import generate_avatar_url
import api.db
from flask import jsonify, Flask

app = Flask(__name__)

def test_init_db():
    api.db.init_db()
    assert api.db.get_db()

formatted_users = [
    {
        # 'id': 1,
        'username': 'paula_abdul',
        'email': 'paula@hi5ive',
        'password_hash': 'paula123',
        'first_name': 'Paula',
        'last_name': 'Abdul',
        'bio': 'I am a singer and dancer',
        'profile_picture': generate_avatar_url(),
        'location': 'New York'
    }
]

def test_create_user():
    api.db.init_db()
    api.db.create_user(**formatted_users[0])
    with app.app_context():
        user = api.db.get_user(1)
        assert user
        user = dict(user)
        for key in formatted_users[0]:
            assert user[key] == formatted_users[0][key]

# formatted_users += [
#     {
#     'username': 'jimmy_abdul',
#     'email': 'jimmy@hi5ive',
#     'password_hash': 'jimmy123',
#     'first_name': 'Jimmy',
#     'last_name': 'Abdul',
#     'bio': 'I wish I was Paula Abdul\'s brother',
#     'profile_picture': generate_avatar_url(),
#     'location': 'New York'
#     },
#     {
#     'username': 'henry_abdul',
#     'email': 'henry@hi5ive',
#     'password_hash': 'henry123',
#     'first_name': 'Henry',
#     'last_name': 'Abdul',
#     'bio': 'I am Paula Abdul\'s brother',
#     'profile_picture': generate_avatar_url(),
#     'location': 'New York'
#     },
#     {
#     'username': 'lenny_kravitz',
#     'email': 'lenny@hi5ive',
#     'password_hash': 'lenny123',
#     'first_name': 'Lenny',
#     'last_name': 'Kravitz',
#     'bio': 'I am a rockstar',
#     'profile_picture': generate_avatar_url(),
#     'location': 'New York'
#     },
#     {
#     'username': 'jimmy_hendrix',
#     'email': 'jimmy@hi5ive',
#     'password_hash': 'jimmy123',
#     'first_name': 'Jimmy',
#     'last_name': 'Hendrix',
#     'bio': 'I am a rockstar',
#     'profile_picture': generate_avatar_url(),
#     'location': 'New York'
#     },
#     {
#     'username': 'hedy_lamar',
#     'email': 'hedy@hi5ive',
#     'password_hash': 'hedy123',
#     'first_name': 'Hedy',
#     'last_name': 'Lamar',
#     'bio': 'I am an actress',
#     'profile_picture': generate_avatar_url(),
#     'location': 'New York'
#     },
# ]