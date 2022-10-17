import React, { useState, useEffect } from "react";
import { Alert } from "shards-react";
// ! FIX THIS COMPONENT

const DismissibleAlert = ({ message, showing, theme, onClose }) => {
  const [visible, setVisible] = useState(showing);

  const dismiss = () => {
    setVisible(false);
    onClose();
  };

  useEffect(() => {
    setVisible(showing);
  }, [showing]);

  return (
    <Alert dismissible={dismiss} open={visible} theme={theme}>
      {message}
    </Alert>
  );
};
export default DismissibleAlert;
