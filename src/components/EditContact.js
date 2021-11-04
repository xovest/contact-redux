import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const contacts = useSelector(state => state[id]);
  const contacts2 = useSelector(state => state);
  const currentContact = contacts2.find(contact => contact.id === parseInt(id));

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts2.find(contact => contact.id !== parseInt(id) && contact.email === email);
    const checkNumber= contacts2.find(contact => contact.id !== parseInt(id) && contact.number === parseInt(number));

    if (!name || !email || !number) {
      return toast.warning('Please fill in all fields!');
    }

    if (checkEmail) {
      return toast.error('This email already exists!');
    }

    if (checkNumber) {
      return toast.error('This number already exists!');
    }

    const data = {
      id: parseInt(id),
      name,
      email,
      number
    };

    dispatch({type: 'UPDATE_CONTACT', payload: data});
    toast.success('Ppl updated!');
    navigate('/');
  };

  return (
    <div className="container">
      {currentContact ? (
        <>
          <h1 className="display-3 my-5 text-center">Editing {contacts.name}</h1>
          <div className="row">
            <div className="col-md-6 shadow mx-auto p-5">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="form-control my-2"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="form-control my-2"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                  <input 
                    type="number" 
                    placeholder="Phone Number" 
                    className="form-control my-2"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <input type="submit" value="Update Ppl" className="btn btn-dark me-3" />

                  <Link to="/" className="btn btn-danger ">Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-3 my-5 text-center">Person with id of {id} doesn't exist!</h1>
      )}
    </div>
  )
}

export default EditContact
