import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
class MyModal extends Component {
  state = {
    isModalOpen: false
  }
toggleModal = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen
    }));
  }
render() {
    const { isModalOpen } = this.state;
return[
      <button key='trigger' onClick={this.toggleModal}>
        Open Modal
      </button>,
      <Modal key='modal' open={isModalOpen} 
             onClose={this.toggleModal}>        
        <div>           
           <h2> This is a modal </h2>
           <button onClick={this.toggleModal}>Close</button>   
        </div>      
      </Modal>
    ];
  };
}
export { MyModal };
