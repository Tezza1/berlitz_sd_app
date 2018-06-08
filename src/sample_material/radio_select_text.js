import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class RadioButtonsGroup extends React.Component {
  state = {
    value: '',
  };

  data = []

  handleChange = event => {
    this.setState({ value: event.target.value });
    this.selectedData(event.target.value);
  };
  
  selectedData(category) {
    if(category === "lvlBeCompleteData") {
        this.data = this.lvlBeCompleteData;
    } else if (category === "beMethodData") {
        this.data = this.beMethodData;
    } else if (category === "bbcsData") {
        this.data = this.bbcsData;
    } else if (category === "toeicData") {
        this.data = this.toeicData;
    }
    this.props.handlerFromParent(this.data);
  }
  
  lvlBeCompleteData = [
    {
      category: 'Interview & Progress', 
      img: require('../images/be_lvl2.png'),
      title: 'Level 2 completion',
      type: 'Short version',
      videoId: 'Sh5svUp5_QE',
      description: "This short video discusses progress made and still to make after completing Level 2 of Berlitz English.",
      key: 'Level 2 progress 1'
    },
    {
      category: 'Interview & Progress', 
      img: require('../images/be_lvl2.png'),
      title: 'Level 2 completion',
      type: 'Long version',
      videoId: 'SmnXg2pGWlY',
      description: "This full length video discusses progress made and still to make after completing Level2 of Berlitz English.",
      key: 'Level 2 progress 2'
    },
    {
      category: 'Interview & Progress', 
      img: require('../images/be_lvl3.png'),
      title: 'Level 3 completion',
      type: 'Short version',
      videoId: 'uMc6-Imgv0c',
      description: "This short video discusses progress made and still to make after completing Level 3 of Berlitz English.",
      key: 'Level 3 progress 1'
    },
    {
      category: 'Interview & Progress', 
      img: require('../images/be_lvl3.png'),
      title: 'Level 3 completion',
      type: 'Long version',
      videoId: 'sBM9tgGbtUA',
      description: "This full length video discusses progress made and still to make after completing Level2 of Berlitz English.",
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
      description: "Discusses the Berlitz English teaching method at the completion of Level 1. Topics include speaking in fluu sentences, the A++ technique, the Level Down technique and correction.",
      key: 'Level 1 method 1'
    },
    {
      category: 'Berlitz Teaching Method',
      img: require('../images/be_lvl2a.png'),
      title: 'Level 2 completion',
      type: 'Teaching method',
      videoId: '7hb9PC48BRk',
      description: "Discusses the Berlitz English teaching method at the completion of Level 2. Topics include speaking in fluu sentences, the A++ technique, the Level Down technique and correction.",
      key: 'Level 2 method 1'
    },
    {
      category: 'Berlitz Teaching Method',
      img: require('../images/be_lvl4.png'),
      title: 'Level 4 completion',
      type: 'Teaching methon',
      videoId: 'QbgwmB19SNo',
      description: "Discusses the Berlitz English teaching method at the completion of Level 4. Topics include speaking in fluu sentences, the A++ technique, the Level Down technique and correction.",
      key: 'Level 4 method 1'
    },
    {
      category: 'Berlitz Teaching Method',
      img: require('../images/be_lvl6.png'),
      title: 'Level 6 completion',
      type: 'Teaching method',
      videoId: 'KHMORxuOeAU',
      description: "Discusses the Berlitz English teaching method at the completion of Level 6. Topics include speaking in fluu sentences, the A++ technique, the Level Down technique and correction.",
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
      description: 'This recording shows a sample session of a communication class. It focuses on the methodlogy and focus of this kind of sessions.',
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
      description: "This is a full length recording of an actual class.",
      key: 'toeic 1'
    }
  ];

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" required className={classes.formControl}>
          <FormLabel component="legend">Sample Text</FormLabel>
          <FormHelperText>Select text to be displayed</FormHelperText>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="berlitz_english" control={<Radio />} label="Berlitz English" />
            <FormControlLabel value="berlitz_ol" control={<Radio />} label="Berlitz Other Languages" />
            <FormControlLabel value="btg" control={<Radio />} label="Berlitz Talent Growth" />
            <FormControlLabel value="toeic" control={<Radio />} label="TOEIC" />
            <FormControlLabel value="biz_jap" control={<Radio />} label="Millenium Partners" />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);