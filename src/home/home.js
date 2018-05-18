import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function Home(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
        <Grid container spacing={24}>
            <Grid item xs={2} sm={4}></Grid>
            <Grid item xs={8} sm={4}>
                <Paper className={classes.paper} style={{marginTop: "4em"}}>
                    <Typography variant="display1" gutterBottom >
                        Welcome to the Berlitz Sales Tool
                    </Typography>
                    <Typography variant="display1" gutterBottom style={{fontSize: "150%", letterSpacing: "0.2em", marginTop: "1em"}}>
                        <i>Success is the result of making small efforts, repeated everday</i>
                    </Typography>
                    <Chip
                      avatar={
                        <Avatar>
                          <FaceIcon />
                        </Avatar>
                      }
                      label={props.chipMessage}
                      className={classes.chip}
                      style={{marginTop: "1em"}}
                    />
                </Paper>
            </Grid>
      </Grid>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);