import React from "react";
/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import useAlert from "../../hooks/alerts";

function AlertBanner() {
  const { alert, dispatchAlert } = useAlert();
  const { title, message, type, onClose, open, timeout } = alert;

  const onCloseButtonClick = (e) => {
    e && e.preventDefault();
    dispatchAlert({
      open: false,
    });
    const event = e || false;
    onClose && onClose(event);
  };

  if (open && timeout) {
    setTimeout(() => {
      onCloseButtonClick();
    }, timeout);
  }

  const types = {
    success: {
      color: "#28a745",
    },
    danger: {
      color: "#ff3d00",
    },
    info: {
      color: "#007BFF",
    },
  };

  const inAnimation = keyframes`
    0% {
        opacity: .5;
        transform: translateY(-25vh);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
  `;

  const style = css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${types[type]?.color || "#28a745"};
    color: white;
    z-index: 2000;
    box-shadow: 0.2px 0.2px 10px 0 rgba(0, 0, 0, 0.75);
    padding: 14px 24px;
    animation: ${inAnimation} 1s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      color: white;
      font-size: 24px;
      margin: 0;
      margin-bottom: 8px;
    }

    .message {
      color: white;
      font-size: 16px;
      margin: 0;
    }

    .close-icon {
      color: white;
      font-size: 24px;
      position: absolute;
      right: 0;
      top: 0;
      padding: 14px 24px;
      cursor: pointer;
      background-color: ${types[type]?.color || "#28a745"};
    }
  `;

  return open ? (
    <div css={style}>
      {title && <h3 className="title">{title}</h3>}
      <p className="message" dangerouslySetInnerHTML={{ __html: message }}></p>
      <i onClick={onCloseButtonClick} className="close-icon material-icons">
        close
      </i>
    </div>
  ) : null;
}

export default AlertBanner;
