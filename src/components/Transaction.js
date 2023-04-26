import React, { useState } from "react";
import DeleteTransaction from "./DeleteTransaction";

function Transaction({
  id,
  date,
  description,
  category,
  amount,
  onDelete,
}) {
  const [isDeleting, setIsDeleting] = useState(false);

  function handleDelete(id) {
    setIsDeleting(true);
    onDelete(id);
  }

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        {!isDeleting ? (
          <DeleteTransaction id={id} onDelete={handleDelete} />
        ) : (
          "Deleting..."
        )}
      </td>
    </tr>
  );
}

export default Transaction;
