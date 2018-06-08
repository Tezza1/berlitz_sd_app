import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

/* TO STYLE SELECT BUTTON */
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class VideoSelect extends React.Component {
  state = {
    videoCategory: []
  };

  /* SEND DATA BACK TO THE PARENT THROUGH*/
  handleChange = event => {
    // this.setState({ [event.target.name]: event.target.value });
    this.setState({ 
        videoCategory: event.target.value 
    });
    this.props.handlerFromParent(this.state.videoCategory);
  };
  
  /* DATA FOR EACH VIDEO CATEGORY - TO BE ADDED TO A MONGO DB LATER */
  lvlBeCompleteData = [
    {
      category: 'Interview & Progress', 
      img: require('../images/be_lvl2.png'),
      title: 'Level 2 completion',
      type: 'Short version',
      videoId: 'Sh5svUp5_QE',
      key: 'Level 2 progress 1'
    },
    {
      category: 'Interview & Progress', 
      img: require('../images/be_lvl2.png'),
      title: 'Level 2 completion',
      type: 'Long version',
      videoId: 'SmnXg2pGWlY',
      key: 'Level 2 progress 2'
    },
    {
      category: 'Interview & Progress', 
      img: require('../images/be_lvl3.png'),
      title: 'Level 3 completion',
      type: 'Short version',
      videoId: 'uMc6-Imgv0c',
      key: 'Level 3 progress 1'
    },
    {
      category: 'Interview & Progress', 
      img: require('../images/be_lvl3.png'),
      title: 'Level 3 completion',
      type: 'Long version',
      videoId: 'sBM9tgGbtUA',
      key: 'Level 3 progress 2'
    },
  ];

  beMethodData = [
    {
      category: 'Berlitz Teaching Method',
      img: require('../images/be_lvl1.png'),
      title: 'Level 1 completion',
      type: 'Teaching method',
      videoId: 'ltM-BlJrVN4',
      key: 'Level 1 method 1'
    },
    {
      category: 'Berlitz Teaching Method',
      img: require('../images/be_lvl2a.png'),
      title: 'Level 2 completion',
      type: 'Teaching method',
      videoId: '7hb9PC48BRk',
      key: 'Level 2 method 1'
    },
    {
      category: 'Berlitz Teaching Method',
      img: require('../images/be_lvl4.png'),
      title: 'Level 4 completion',
      type: 'Teaching methon',
      videoId: 'QbgwmB19SNo',
      key: 'Level 4 method 1'
    },
    {
      category: 'Berlitz Teaching Method',
      img: require('../images/be_lvl6.png'),
      title: 'Level 6 completion',
      type: 'Teaching method',
      videoId: 'KHMORxuOeAU',
      key: 'Level 6 method 1'
    }
  ];

  bbcsData = [
    {
      category: 'Communication Skills',
      img: require('../images/bbcs.png'),
      title: 'BBCS Open Course',
      type: 'Sample Session',
      videoId: 'F0WdBLe34Vk',
      key: 'bbcs 1'
    },
  ];
  
  toeicData = [
    {
      category: 'TOEIC',
      img: require('../images/toeic.png'),
      title: 'TOEIC Group Lesson',
      type: 'Full Session',
      videoId: 'pHVq2AlzvCo',
      key: 'toeic 1'
    }
  ];
  
  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel>Sample videos</InputLabel>
          <Select
            value={this.state.videoCategory}
            onChange={this.handleChange}
          >
            <MenuItem value=""><em>Pick a category</em></MenuItem>
            <MenuItem value={this.lvlBeCompleteData}>Interview & Progress</MenuItem>
            <MenuItem value={this.beMethodData}>Berlitz Teaching Method</MenuItem>
            <MenuItem value={this.bbcsData}>Communication Skills</MenuItem>
            <MenuItem value={this.toeicData}>TOEIC</MenuItem>
          </Select>
          <FormHelperText>Select videos to be displayed</FormHelperText>
        </FormControl>
      </form>
    );
  }
}

VideoSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(VideoSelect);
