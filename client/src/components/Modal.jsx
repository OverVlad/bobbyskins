import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class Modal extends Component {
  constructor(title, open) {
    super();

    this.state = {
      open: open,
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
   const actions = [
     <FlatButton
       label="OK"
       primary={true}
       onTouchTap={this.handleClose}
     />,
   ];

   return (
     <div>
       <RaisedButton label="Warning" onTouchTap={this.handleOpen} />
       <Dialog
         title=""
         actions={actions}
         modal={false}
         open={this.state.open}
         onRequestClose={this.handleClose}
       >
         The actions in this window were passed in as an array of React objects.
       </Dialog>
     </div>
   );
 }
}

export default Modal;
