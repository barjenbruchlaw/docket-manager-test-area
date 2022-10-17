import React, { Fragment } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "shards-react";

function ConfirmModal(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handClick = () => {
    if (props.onConfirm) {
      props.onConfirm();
    }
    setIsOpen(false);
  };

  return (
    <Fragment>
      <span onClick={toggle}>{props.children}</span>
      <Modal open={isOpen} toggle={toggle}>
        <ModalHeader>Please Confirm</ModalHeader>
        <ModalBody>{props.confirmMessage}</ModalBody>
        <ModalFooter>
          <Button theme="danger" onClick={toggle}>
            Cancel
          </Button>
          <Button theme="success" onClick={handClick}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
}

export default ConfirmModal;
