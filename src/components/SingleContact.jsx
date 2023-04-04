import Favorite from './Favorite';

const SingleContact = ({ selectedContact, selectContact }) => {
  return (
    <div id='single-contact'>
      <div id='contact-info'>
        <p>
          <b>Name:</b>
          {selectedContact.name}
        </p>
        <p>
          <b>Email:</b>
          {selectedContact.email}
        </p>
        <p>
          <b>Phone:</b>
          {selectedContact.phone}
        </p>
        <div>
          <b>Address:</b> {selectedContact.address.suite}
          <p>
            <b>Street:</b>
            {selectedContact.address.street}
            <br />
            <b>City/State:</b>
            {selectedContact.address.city}
          </p>
        </div>
        <p>
          <b>Company:</b>
          {selectedContact.company.name}
        </p>
        <Favorite contact={selectedContact} selectContact={selectContact} />
      </div>
    </div>
  );
};

export default SingleContact;
