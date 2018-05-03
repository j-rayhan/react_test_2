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

const OptionsModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handelCloseModel}
    contentLabel="Example Modal"
    closeTimeoutMS={200}
    className="modal"
  >
  <h2 className="modal_title">Hello</h2>
  {props.selectedOption && (<p className="modal__body">{props.selectedOption}</p>)}
  <button className="button" onClick={props.handelCloseModel}>close</button>
  </Modal>
);

export default OptionsModal;


// onAfterOpen={props.afterOpenModal}
// onRequestClose={props.closeModal}