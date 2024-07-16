# Basic test file for routes on the flask server.
# Does not require running server.

from api.app import app
import pytest

@pytest.fixture
def client():
    return app.test_client()

def test_get_user(client):
    response = client.get('/user')
    assert response.status_code == 200
    assert response.json == {'user': 'Paula Abdul'}

def test_get_home(client):
    response = client.get('/home')
    assert response.status_code == 200
    assert response.data == b"Welcome home, dude!"