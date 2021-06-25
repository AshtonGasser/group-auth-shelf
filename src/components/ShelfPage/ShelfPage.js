import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

function ShelfPage() {

  const dispatch = useDispatch();
  const shelf = useSelector(store => store.shelf);

  useEffect(() => {
  
  dispatch({type: 'FETCH_SHELF'})
  }, []);
  
const handleDelete = (id) => {
  console.log('Item to delete:', id)
  dispatch({type: 'DELETE_ITEM', payload: id})
}
  console.log(shelf);
  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      {shelf.map(image => {

        return (
          <div>
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
          </div>
      );
      })}
    </div>
  );
}

export default ShelfPage;
