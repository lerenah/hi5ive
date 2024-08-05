import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react';

export default function Navar() {
  const [activeItem, setActiveItem] = React.useState('home');
  const location = useLocation();

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu secondary>
      <Menu.Item
        as={Link}
        to="/"
        name="home"
        active={activeItem === 'home'}
        onClick={handleItemClick}
      />
      {location.pathname !== '/SignUp' && ( //Does not include profile links on signup page
        <>
          <Menu.Item
            as={Link}
            to="/users"
            name="5ivers"
            active={activeItem === '5ivers'}
            onClick={handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/my-profile"
            name="my-profile"
            active={activeItem === 'my-profile'}
            onClick={handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/SignUp"
            name="SignUp"
            active={activeItem === 'SignUp'}
            onClick={handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Find Matches..." />
            </Menu.Item>
            <Menu.Item
              name="logout"
              active={activeItem === 'logout'}
              onClick={handleItemClick}
            />
          </Menu.Menu>
        </>
      )}
    </Menu>
  );
}
