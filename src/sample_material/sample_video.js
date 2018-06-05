import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonalVideo from '@material-ui/icons/PersonalVideo';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import ModalVideo from 'react-modal-video';

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
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: blue[500],
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

class SampleVideos extends React.Component {
  
  constructor () {
    super();
    this.state = {
      expanded: false,
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  
  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };
  
  openModal () {
    this.setState({isOpen: true});
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                <PersonalVideo />
              </Avatar>
            }
            title="Video category"
            subheader="Video sub-category"
          />
          <CardMedia
            className={classes.media}
            image="../images/bbcs.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
              Description of video category to be viewed and what to watch for in the video to get the most from the video and leave the biggest impact with the client.
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <GridList cellHeight={180} className={classes.gridList}>
                {this.props.data.map(tile => (
                  <GridListTile key={tile.key} cols={2}>
                    <img src={tile.img} alt={tile.title} />
                    <GridListTileBar
                      title={tile.title}
                      subtitle={<span>{tile.type}</span>}
                      actionIcon={
                        <IconButton className={classes.icon} onClick={this.openModal}>
                          <PlayCircleFilled />             
                        </IconButton>
                      }
                    />
                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={tile.videoId} onClose={() => this.setState({isOpen: false})} />
                  </GridListTile>
                ))}
              </GridList>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

SampleVideos.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SampleVideos);