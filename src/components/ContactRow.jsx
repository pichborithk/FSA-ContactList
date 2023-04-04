const ContactRow = ({ contacts, selectContact }) => {
  return contacts.map((contact) => {
    return (
      <tr key={contact.id} onClick={() => selectContact(contact.id)}>
        <td>{contact.name}</td>
        <td>{contact.phone}</td>
        <td>{contact.email}</td>
      </tr>
    );
  });
};

export default ContactRow;
