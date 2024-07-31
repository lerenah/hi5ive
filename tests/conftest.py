import pytest
from api.app import create_app

@pytest.fixture
def client():
    app = create_app()
    app.config['TESTING'] = True
    app.config['DATABASE'] = 'test.db'
    with app.app_context():
        with app.test_client() as client:
            yield client