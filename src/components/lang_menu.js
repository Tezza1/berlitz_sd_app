import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Language from '@material-ui/icons/Language';

const options = [
  'English',
  '日本',
  '中文',
  'Deutsche',
  'français',
  'Español',
  'Other'
];

const ITEM_HEIGHT = 48;

class LangMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={anchorEl ? 'lang-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          color="inherit"
        >
            <Language />
        </IconButton>
        <Menu
          id="lang-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {options.map(option => (
            <MenuItem key={option} selected={option === 'English'} onClick={this.handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default LangMenu;
