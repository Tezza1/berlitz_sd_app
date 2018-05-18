import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Share from '@material-ui/icons/Share';
import School from '@material-ui/icons/School';
import Search from '@material-ui/icons/Search';
import Shop from '@material-ui/icons/Shop';
import Settings from '@material-ui/icons/Settings';
import AttachMoney from '@material-ui/icons/AttachMoney';
import EventNote from '@material-ui/icons/EventNote';
import Map from '@material-ui/icons/Map';
import CollectionsBookmark from '@material-ui/icons/CollectionsBookmark';
import LocalLibrary from '@material-ui/icons/LocalLibrary';
import Home from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

export const homeItems = (
    <div>
        <Link to='/' style={{textDecoration: 'none'}}>
            <ListItem button>
                <ListItemIcon>
                    <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
        </Link>
    </div>
);

export const keyItems = (
    <div>
        <Link to='/portfolio' style={{textDecoration: 'none'}}>
            <ListItem button>
                <ListItemIcon>
                    <CollectionsBookmark />
                </ListItemIcon>
                <ListItemText primary="Portfolio" />
            </ListItem>
        </Link>
        <Link to='/learning_paths' style={{textDecoration: 'none'}}>
            <ListItem button>
                <ListItemIcon>
                    <Share />
                </ListItemIcon>
                <ListItemText primary="Leaning paths" />
            </ListItem>
        </Link>
        <Link to='/sample_material' style={{textDecoration: 'none'}}>
            <ListItem button>
                <ListItemIcon>
                    <LocalLibrary />
                </ListItemIcon>
                <ListItemText primary="Sample Material" />
            </ListItem>
        </Link>
        <Link to='/brochures' style={{textDecoration: 'none'}}>
            <ListItem button>
                <ListItemIcon>
                    <Map />
                </ListItemIcon>
                <ListItemText primary="Brochures" />
            </ListItem>
        </Link>        
    </div>
);

export const myStuff = (
    <div>
        <Link to='/my_visit' style={{textDecoration: 'none'}}>    
            <ListItem button>
                <ListItemIcon>
                    <EventNote />
                </ListItemIcon>
                <ListItemText primary="MyVisit" />
            </ListItem>
        </Link>         
        <Link to='/my_proposal' style={{textDecoration: 'none'}}>
            <ListItem button>
                <ListItemIcon>
                    <Shop />
                </ListItemIcon>
                <ListItemText primary="MyProposals" />
            </ListItem>
        </Link>         
        <Link to='/qik_calc' style={{textDecoration: 'none'}}>
            <ListItem button>
                <ListItemIcon>
                    <AttachMoney />
                </ListItemIcon>
                <ListItemText primary="QikCalc" />
            </ListItem>
        </Link>     
    </div>
);

export const selfDevelopment = (
    <div>
        <Link to='/articles' style={{textDecoration: 'none'}}>            
            <ListItem button>
                <ListItemIcon>
                    <School />
                </ListItemIcon>
                <ListItemText primary="Articles" />
            </ListItem>
        </Link>
  </div>
);

export const search = (
    <div>
        <Link to='/search' style={{textDecoration: 'none'}}>
            <ListItem button>
                <ListItemIcon>
                    <Search />
                </ListItemIcon>
                <ListItemText primary="Search" />
            </ListItem>
        </Link>
  </div>
);

export const settings = (
    <div>
        <Link to='/settings' style={{textDecoration: 'none'}}>
            <ListItem button>
                <ListItemIcon>
                    <Settings />
                </ListItemIcon>
                <ListItemText primary="Settings" />
            </ListItem>
        </Link>        
  </div>
);