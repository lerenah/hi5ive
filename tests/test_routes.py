# Basic test file for routes on the flask server.
# Does not require running server.

from api import app
import pytest

@pytest.fixture
def client():
    return app.test_client()

def test_get_users(client):
    response = client.get('/users')
    assert response.status_code == 200
    assert len(response.json) > 0

def test_get_unknown_route(client):
    response = client.get('/home')
    assert response.status_code == 404