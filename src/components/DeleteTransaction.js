import React, { useState } from "react";

function DeleteTransaction({ id, onDelete }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  function handleDelete() {
    fetch(`http://localhost:8001/transactions/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete transaction");
        }
        onDelete(id);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <button onClick={() => setShowConfirmation(true)}>Delete</button>
      {showConfirmation && (
        <div>
          <p>Are you sure you want to delete this transaction?</p>
          <button onClick={handleDelete}>Confirm</button>
          <button onClick={() => setShowConfirmation(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default DeleteTransaction;
