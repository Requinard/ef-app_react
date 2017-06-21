import React from 'react'
import { Popover, Menu, MenuItem, Subheader, Divider } from 'material-ui'
import TodayIcon from 'material-ui/svg-icons/action/today'
import InfoIcon from 'material-ui/svg-icons/action/info'
import AccountBoxIcon from 'material-ui/svg-icons/action/account-box'
import LocalGroceryStoreIcon from 'material-ui/svg-icons/maps/local-grocery-store'
import { hashHistory } from 'react-router'

export class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.pushLocation = (url) => {
      hashHistory.push(url);
      this.close();
    };
    this.close = () => {
      this.props.onRequestClose();
    } 
  }

  render() {
    return (
      <Popover
        open={this.props.open}
        animation={Popover.PopoverAnimationVertical}
        onRequestClose={this.close}
      >
        <Menu
          width={200}
        >
          <Subheader>Navigation</Subheader>
          <MenuItem
            leftIcon={<TodayIcon />}
            primaryText="Events"
            onTouchTap={() => this.pushLocation('/event')}
          />
          <MenuItem
            leftIcon={<LocalGroceryStoreIcon />}
            primaryText="Dealers"
            onTouchTap={() => this.pushLocation('/dealer')}
          />
          <MenuItem
            leftIcon={<InfoIcon />}
            primaryText="Knowledge"
            onTouchTap={() => this.pushLocation('/info')}
          />
        
          <Divider />
          { this.props.username ?  
            <MenuItem leftIcon={<AccountBoxIcon />} primaryText={this.props.username} />
            :
            <MenuItem leftIcon={<AccountBoxIcon />} primaryText="Login" onTouchTap={() => this.pushLocation('/login') } />
          }
        </Menu>
      </Popover>
    );
  }
}
