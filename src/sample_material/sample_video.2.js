import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import PersonalVideo from '@material-ui/icons/PersonalVideo';
import ModalVideo from 'react-modal-video';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  card: {
    maxWidth: 400,
    paddingBottom: '2em',
    margin: '1em auto 2em auto'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: blue[500],
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class SampleVideos extends React.Component {
  
  constructor () {
    super();
    this.state = {
      isOpen: false,
      vidId: ''
    };
    this.openModal = this.openModal.bind(this);
  }
  
  openModal (videoId) {
    this.setState({
      isOpen: true,
      vidId: videoId
    });
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div>
      {this.props.data.map(tile => (
        <Card className={classes.card} key={tile.key} value={"Terry"}>
          <CardHeader
            avatar={
              <Avatar aria-label="Video" className={classes.avatar}>
                <PersonalVideo />
              </Avatar>
            }
            title={tile.title}
            subheader="Video"
          />
          <CardMedia
            className={classes.media}
            image= {tile.img} 
            title= {tile.title}
          />
          <CardContent value={"Terry"}>
            <Typography component="p">
              Description of video category to be viewed and what to watch for in the video to get the most from the video and leave the biggest impact with the client.
            </Typography>
            <Button color="primary" className={classes.button} onClick={(e)=>{this.openModal(e.target.id)}}>
              <div id={tile.videoId}>Play video</div>
            </Button>
          </CardContent>
          {/*<ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.vidId} onClose={() => this.setState({isOpen: false})} />*/}
        </Card>
          ))}
      </div>
    );
  }
}

SampleVideos.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SampleVideos);