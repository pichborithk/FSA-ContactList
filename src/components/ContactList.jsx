import ContactRow from './ContactRow';

const ContactList = ({ contacts, selectContact }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
        <ContactRow contacts={contacts} selectContact={selectContact} />
      </tbody>
    </table>
  );
};

export default ContactList;
