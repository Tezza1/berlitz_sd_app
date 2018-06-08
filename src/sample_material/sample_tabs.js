import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
/* MODULES TO ADD TO PAGE */
import SampleVideos from './sample_video';
import RadioSelectVideo from './radio_select_video';
import RadioSelectText from './radio_select_text';
import TextLightbox from './sample_text';
import SelectText from './selects_text_select';
import TextProgress from './text_progress';

/* TO STYLE TABS & MAKE TABS WORKS */
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SampleTabs extends React.Component {

  constructor() {
    super();
    this.handleData = this.handleData.bind(this);
    this.state = {
      value: 0,
      data: []
    };
  }
  
  /* TO GET DATA FROM A CHILD */  
  handleData(data) {
    this.setState({
      data: data
    });
  }

  /* TO CHANGE TABS */ 
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs 
            value={value} 
            onChange={this.handleChange}
            indicatorColor="primary"
            centered
          >
            <Tab label="Video" />
            <Tab label="Text" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>
          <RadioSelectVideo handlerFromParent={this.handleData}/>
          <SampleVideos data={this.state.data}/>
        </TabContainer>}
        {value === 1 && <TabContainer>
          <TextProgress />
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
                <RadioSelectText handlerFromParent={this.handleData}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <SelectText />
            </Grid>
          </Grid>
          <TextLightbox />
        </TabContainer>}
      </div>
    );
  }
}

SampleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SampleTabs);