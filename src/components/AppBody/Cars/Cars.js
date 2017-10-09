import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Style from './Cars.css'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

function Cars(props) {
  const { classes } = props;
  return (

    <div  className="row">
      <div  className="col-md-4 car-display">
      
         <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require('../../../assests/images/duster.jpg')}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography type="headline" component="h2">
            Duster
          </Typography>
          <Typography component="h6">
          The Dacia Duster is a compact sport utility vehicle (SUV) produced jointly by the French manufacturer Renault and its Romanian subsidiary Dacia since 2010. It is also marketed as the Renault Duster in certain markets, such as India, Iran, Kazakhstan, Russia, Mexico, Egypt, South Africa, Ukraine, the UAE and in South America.
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color="primary">
            Add to Cart
          </Button>
          <Button dense color="danger">
            Know More
          </Button>
        </CardActions>
      </Card>
    </div>
    <div  className="col-md-4 car-display">
      
         <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require('../../../assests/images/duster.jpg')}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography type="headline" component="h2">
            Duster
          </Typography>
          <Typography component="h6">
          The Dacia Duster is a compact sport utility vehicle (SUV) produced jointly by the French manufacturer Renault and its Romanian subsidiary Dacia since 2010. It is also marketed as the Renault Duster in certain markets, such as India, Iran, Kazakhstan, Russia, Mexico, Egypt, South Africa, Ukraine, the UAE and in South America.
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color="primary">
            Add to Cart
          </Button>
          <Button dense color="danger">
            Know More
          </Button>
        </CardActions>
      </Card>
    </div>
    <div  className="col-md-4 car-display">
      
         <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require('../../../assests/images/duster.jpg')}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography type="headline" component="h2">
            Duster
          </Typography>
          <Typography component="h6">
          The Dacia Duster is a compact sport utility vehicle (SUV) produced jointly by the French manufacturer Renault and its Romanian subsidiary Dacia since 2010. It is also marketed as the Renault Duster in certain markets, such as India, Iran, Kazakhstan, Russia, Mexico, Egypt, South Africa, Ukraine, the UAE and in South America.
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color="primary">
            Add to Cart
          </Button>
          <Button dense color="danger">
            Know More
          </Button>
        </CardActions>
      </Card>
    </div>
    </div>

  );
}

Cars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cars);