import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    
  }
});

const MyVisit = (props) => {
    const { classes } = props;
    
    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={1} sm={1}></Grid>
                <Grid item xs={11} sm={11}>
                    <Typography variant="display1" gutterBottom style={{marginTop: "1.5em"}}>
                        My Client Visit
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

MyVisit.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyVisit);
