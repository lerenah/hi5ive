# Work in progress file

import pytest
from api import create_app


@pytest.fixture
def client():
    app = create_app()
    with app.app_context():
        app.config['TESTING'] = True
        app.config['DATABASE'] = 'test.db'
    
        with app.test_client() as client:
            yield client