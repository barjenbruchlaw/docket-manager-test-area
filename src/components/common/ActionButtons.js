import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ConfirmModal from "./ConfirmModal";
import useUser from "../../hooks/useUser";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function ActionButtons({
  edit_endpoint,
  delete_message,
  handleSoftDelete,
  hard_deletes,
  hard_delete_message,
  handleHardDelete,
  edit_permission,
  handleRestore,
  restore_message,
}) {
  const { hasRole } = useUser();
  const [showEdit, setShowEdit] = useState(true);

  // if edit_permission exists, set show edit to true if hasrole(edit_permission)
  useEffect(() => {
    if (edit_permission) {
      setShowEdit(hasRole(edit_permission));
    }
  }, [edit_permission, hasRole]);

  const style = css`
    .action-icon:hover {
      cursor: pointer;
    }
  `;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      css={style}
    >
      {showEdit && !hard_deletes && (
        <Link to={edit_endpoint}>
          <span
            title="Edit this item"
            className="material-icons list-view-actions action-icon"
          >
            mode_edit
          </span>
        </Link>
      )}

      {!hard_deletes && hasRole("attorney") && (
        <ConfirmModal
          confirmMessage={delete_message}
          onConfirm={handleSoftDelete}
        >
          <span
            type="button"
            tabIndex={0}
            className="material-icons text-danger list-view-actions action-icon"
            title="Delete this Item"
          >
            delete
          </span>
        </ConfirmModal>
      )}
      {hard_deletes && hasRole("attorney") && (
        <ConfirmModal
          confirmMessage={
            restore_message || "Are you sure you want to restore this item?"
          }
          onConfirm={handleRestore}
        >
          <span
            type="button"
            tabIndex={0}
            className="material-icons text-success list-view-actions action-icon"
            title="Restore Item"
          >
            restore
          </span>
        </ConfirmModal>
      )}
      {hard_deletes && hasRole("superuser") && (
        <ConfirmModal
          confirmMessage={
            hard_delete_message ||
            "Are you sure you want to delete this item forever?"
          }
          onConfirm={handleHardDelete}
        >
          <span
            type="button"
            tabIndex={0}
            className="material-icons list-view-actions action-icon"
            title="Delete Permanently"
          >
            delete_forever
          </span>
        </ConfirmModal>
      )}
    </div>
  );
}

export default ActionButtons;
