import React from 'react';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

function ShelfPage() {
  useEffect(() => {
    dispatch({type: 'FETCH_ITEMS'})
  }, []);
  
const handleDelete = (id) => {
  console.log('Item to delete:', id)
  dispatch({type: 'DELETE_ITEM', payload: id})
}
  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      {something.map(image => {
        return (
          <Grid item sm={3}>
              <Paper>
                  <Card key={image.id}>
                      <CardContent>
                      <img src={image.image_url} />
                      <Typography gutterBottom variant="h4" component="h2">{image.description}</Typography>
                      </CardContent>
                      <CardActions>
                        <button onClick={() => handleDelete(image.id)}>Delete</button>
                      </CardActions>
                  </Card>
              </Paper>
          </Grid>
      );
      })}
    </div>
  );
}

export default ShelfPage;
