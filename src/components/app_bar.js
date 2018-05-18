import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BusinessCenter from '@material-ui/icons/BusinessCenter';
import GroupAdd from '@material-ui/icons/GroupAdd';
import Domain from '@material-ui/icons/Domain';
import TemporaryDrawer from './drawer_menu';
import LangMenu from './lang_menu';
import FormDialog from './login_screen';
import LoginSnackbar from './login_snackbar';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};


class NavBar extends Component {
    
    state = {
        auth: false,
        anchorEl: null,
        snackBarOpen: true
    };

    handleChange = (event, checked) => {
        this.setState({ auth: checked });
    };

    handleMenu = event => {
        this.setState({ 
            anchorEl: event.currentTarget, 
        });
    };
    
    handleClose = () => {
        this.setState({ 
            anchorEl: null, 
        });
    };
    
    handleFormClose = () => {
        this.setState({ 
            snackBarOpen: true, 
        });
    };
    
    render() {
        
        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);
        
        return (
            <div className={classes.root}>
                <FormGroup>
                    <FormControlLabel
                        style={{marginLeft: "1em"}}
                        control={
                            <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
                        }
                        label={auth ? 'Logout' : 'Login'}
                    />
                </FormGroup>
 
                <AppBar position="static">
                    <Toolbar>
                        {auth && (
                            <FormDialog onClose={this.handleFormClose} />
                        )}
                        {auth && (
                            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                                <TemporaryDrawer />
                            </IconButton>
                        )}
                        {auth && (
                            <LoginSnackbar open={this.state.snackBarOpen}/>
                        )}
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Berlitz Sales Tool
                        </Typography>
                        {auth && (
                            <div>
                                <IconButton
                                    aria-owns={open ? 'language-menu' : null}
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <LangMenu />
                                </IconButton>
                                <IconButton
                                    aria-owns={open ? 'menu-appbar' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={this.handleClose}
                                >
                                   <MenuItem onClick={this.handleClose}>
                                        <ListItemIcon className={classes.icon}>
                                            <Domain />
                                        </ListItemIcon>
                                        <ListItemText classes={{ primary: classes.primary }} inset primary="My Company" />
                                    </MenuItem>
                                   <MenuItem onClick={this.handleClose}>
                                        <ListItemIcon className={classes.icon}>
                                            <GroupAdd />
                                        </ListItemIcon>
                                        <ListItemText classes={{ primary: classes.primary }} inset primary="My Group" />
                                    </MenuItem>
                                    <MenuItem onClick={this.handleClose}>
                                        <ListItemIcon className={classes.icon}>
                                            <BusinessCenter />
                                        </ListItemIcon>
                                        <ListItemText classes={{ primary: classes.primary }} inset primary="My Items" />
                                    </MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);