import React from 'react';
import Modal from "react-modal";

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

const OptionsModal = (props) => {
    return (<Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handelCloseModel}
    style={customStyles}
    contentLabel="Example Modal"
  >
    <h2>Hello</h2>
    <button onClick={props.handelCloseModel}>close</button>
      {props.selectedOption && <p>{props.selectedOption}</p>}
    </Modal>)
}

export default OptionsModal;


// onAfterOpen={props.afterOpenModal}
// onRequestClose={props.closeModal}