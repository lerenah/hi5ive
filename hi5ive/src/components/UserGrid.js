import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GridRow, GridColumn, Grid, Image } from 'semantic-ui-react';

export const UserGrid = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    const response = await axios.get('/users');
    console.log(response.data);
    setUsers(response.data);
  };

  useEffect(() => {
    setLoading(true);
    getUsers();
    setLoading(false);
  }, []);

  return (
    <Grid columns={3}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <GridRow>
          {users.map((user) => (
            <GridColumn key={user.id}>
              <h2>{user.name}</h2>
              <Image src={user.imageUrl} alt={'Photo of ' + user.name} />
              <p>{user.about}</p>
            </GridColumn>
          ))}
        </GridRow>
      )}
    </Grid>
  );
};
