import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    position: "absolute",
    bottom: "10px",
    width: "100%"
  },
};

const FooterBar = (props) => {
    const { classes } = props;

    const buttonContent = [
        {
            "key": "footer1",
            "href": "http://www.berlitz.co.jp/",
            "iContent": "fas fa-home"
        },
        {
            "key": "footer2",
            "href": "http://www.berlitz-sd.jp/",
            "iContent": "fas fa-building"
        },
        {
            "key": "footer3",
            "href": "http://www.berlitz-blog.com/",
            "iContent": "fa fa-comments"
        },
        {
            "key": "footer4",
            "href": "https://www.facebook.com/BerlitzJapan/",
            "iContent": "fab fa-facebook-square"
        },
        {
            "key": "footer5",
            "href": "https://twitter.com/berlitz_japan",
            "iContent": "fab fa-twitter-square"
        },
        /*
        {
            "key": "footer6",
            "href": "https://www.linkedin.com/company/berlitz-corporation/?originalSubdomain=jp",
            "iContent": "fab fa-linkedin"
        }
        */
    ];

    return (
        <div className={classes.root}>
            <BottomNavigation color="inherit">
                <Toolbar>
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <img src={require('../images/Berlitz_logo.png')} alt="Logo" style={{width: 120}}></img>
                    </Link>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                    
                    </Typography>
                    {buttonContent.map(item => {
                        return ( 
                            <IconButton color="primary" href={item.href} target="_blank" key={item.key}>
                                <i className={item.iContent}></i>
                            </IconButton>    
                        );
                    })}
                </Toolbar>
            </BottomNavigation>
        </div>
    );
}

FooterBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FooterBar);