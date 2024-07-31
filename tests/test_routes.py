# Basic test file for routes on the flask server.
# Does not require running server.

from api import create_app
import pytest
import json

@pytest.fixture
def client():
    app = create_app()
    return app.test_client()

def test_get_users(client):
    response = client.get('/users')
    assert response.status_code == 200
    assert len(response.json) > 0

def test_get_unknown_route(client):
    response = client.get('/home')
    assert response.status_code == 404

# testing route through flask to db for user 1 request
# make_response creates werkzeug Response object with 
# is_json, status_code, json methods below
def test_get_user(client):
    response = client.get('/user/1')
    assert response.is_json
    assert response.status_code == 200
    assert response.json['username'] == 'paula_abdul'
    assert response.json['id'] == 1