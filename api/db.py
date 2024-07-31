from flask import Flask
import sqlite3
import os

def init_db():
    db = get_db()
    with open('api/schema.sql') as f:
        db.executescript(f.read())
    db.commit()
    db.close()

def get_db():
    db = sqlite3.connect('database.db')
    db.row_factory = sqlite3.Row
    return db

# retrieve a user by id
def get_user(user_id):
    db = get_db()
    user = db.execute('SELECT * FROM users WHERE id = ?', (user_id,)).fetchone()
    db.close()
    return user

def create_user(username, email, password_hash, first_name, last_name, bio, profile_picture, location):
    db = get_db()
    db.execute('''INSERT INTO users 
                (username, email, password_hash, first_name, last_name, bio, profile_picture, location)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)''', 
                (username, email, password_hash, first_name, last_name, bio, profile_picture, location))
    db.commit()
    db.close()