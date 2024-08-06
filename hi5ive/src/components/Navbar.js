import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react';

export default class Navbar extends Component {
  state = { activeItem: '' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  // handles logout
 handleLogout = () => {
   const {onLogout} = this.props;
   onLogout();
  }

  render() {
    const { activeItem } = this.state;
    const { user } = this.props;

    return (
      <Menu secondary>
        {!user && (
          <Menu.Item
          as={Link}
          to="/"
          name="home"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        )}

        {user && (
          <Menu.Item
          as={Link}
          to="/users"
          name="5ivers"
          active={activeItem === '5ivers'}
          onClick={this.handleItemClick}
        />
        )}

        {user && (
          <Menu.Item
          as={Link}
          to="/my-profile"
          name="my-profile"
          active={activeItem === 'my-profile'}
          onClick={this.handleItemClick}
        />
        )}

        <Menu.Menu position="right">
          {user && (
            <Menu.Item>
            <Input icon="search" placeholder="Find Matches..." />
          </Menu.Item>
          )}
          {user && (<Menu.Item
            name="logout"
            active={activeItem === 'logout'}
            onClick={this.handleLogout}
          >
            Logout
          </Menu.Item>
    )}
        </Menu.Menu>
      </Menu>
    );
  }
}
