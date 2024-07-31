from flask import g, current_app
import sqlite3
import os

def init_db():
    db = get_db()
    with open('api/schema.sql') as f:
        db.executescript(f.read())
    db.commit()
    #db.close()

# current_app must be called within context of a flask application
# ie within a route or with app_context(). get_db() will not function
# if called independently because it looks for the database path in
# the context of the current flask application 
def get_db():
    # db = sqlite3.connect('database.db')
    # db.row_factory = sqlite3.Row
    # return db
    if 'db' not in g:
        g.db = sqlite3.connect(
            current_app.config['DATABASE'],
            detect_types=sqlite3.PARSE_DECLTYPES
        )
        g.db.row_factory = sqlite3.Row

    return g.db

# retrieve a user by id
# TODO: move query lines to route definitions?
def get_user(user_id):
    db = get_db()
    user = db.execute('SELECT * FROM users WHERE id = ?', (user_id,)).fetchone()
    #db.close()
    return user

def create_user(username, email, password_hash, first_name, last_name, bio, profile_picture, location):
    db = get_db()
    db.execute('''INSERT INTO users 
                (username, email, password_hash, first_name, last_name, bio, profile_picture, location)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)''', 
                (username, email, password_hash, first_name, last_name, bio, profile_picture, location))
    db.commit()
    #db.close()