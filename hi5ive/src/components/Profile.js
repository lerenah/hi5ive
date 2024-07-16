import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Image,
  Segment,
  Grid,
  Header,
  Button,
  Icon,
  List,
} from 'semantic-ui-react';

import '../styles/style.css';

export const Profile = ({ user: loggedInUser }) => {
  const { userId } = useParams();
  const [user, setUser] = useState(loggedInUser || null);

  useEffect(() => {
    if (!loggedInUser) {
      const fetchUser = async () => {
        try {
          const response = await axios.get(`/users/${userId}`);
          setUser(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchUser();
    }
  }, [userId, loggedInUser]);

  return (
    user && (
      <div className="profile">
        <Segment>
          <Grid>
            <Grid.Row>
              <Grid.Column width={6}>
                <Image
                  src={user.imageUrl}
                  alt={`Photo of ${user.name}`}
                  size="medium"
                  circular
                />
                <Header as="h2">
                  {user.name}
                  <Icon
                    color={user.status === 'active' ? 'green' : 'red'}
                    name="circle"
                  />
                </Header>
                <Button primary>Edit Profile</Button>
                <Button secondary>Settings</Button>
              </Grid.Column>
              <Grid.Column width={5}>
                <List>
                  <List.Item>
                    <List.Header>Hobbies</List.Header>
                    {user.hobbies.map((hobby, idx) => (
                      <List.Item key={idx}>{hobby}</List.Item>
                    ))}
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={5}>
                <List>
                  <List.Item>
                    <List.Header>Groups</List.Header>
                    {user.groups.map((group, idx) => (
                      <List.Item key={idx}>{group}</List.Item>
                    ))}
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Segment>
                  <Header as="h2">About Me</Header>
                  <p>{user.about}</p>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    )
  );
};
