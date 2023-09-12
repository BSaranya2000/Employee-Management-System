import React from "react";
import './del.css'
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <div className="-btn">
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        </div>
        <div className="bt">
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
        </div>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;