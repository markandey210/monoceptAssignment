import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
class MyModal extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      isModalOpen: false
    }
    this.toggleModal = this.toggleModal.bind(this);  
  }
  toggleModal() {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen
    }));
  }
  render() {
    const { isModalOpen } = this.state;
    return(      
      <div>
        <button key='trigger' onClick={this.toggleModal}>
          Open Modal
        </button>
        <Modal key="modal" open={isModalOpen} 
             onClose={this.toggleModal}>        
          <div>           
             <h2> This is a modal </h2>
             <button onClick={this.toggleModal}>Close</button>   
          </div>      
        </Modal>
      </div>    
    );
  };
}
export { MyModal };
