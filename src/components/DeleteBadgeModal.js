import React from 'react';
import Modal from './Modal';

function DeleteBadgeModal (props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} >
      <div className="DeleteBadgeModal">
        <h2>Are You Sure?</h2>
        <p>You are about to delete this badge.</p>

        <div>
          <button
            className="btn btn-danger me-4"
            onClick={props.onDeleteBadge}
          >
            Delete
          </button>
          <button
            className="btn btn-primary"
            onClick={props.onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteBadgeModal;