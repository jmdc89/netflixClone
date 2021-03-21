
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';

export default function SignIn() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
  
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const isInvalid = password === '' || emailAddress === '';
  
    const handleSignin = (event) => {
      event.preventDefault();
  
      return firebase
        .auth()
        .signInWithEmailAndPassword(emailAddress, password)
        .then(() => {
          history.push(ROUTES.BROWSE);
        })
        .catch((error) => {
          setEmailAddress('');
          setPassword('');
          setError(error.message);
        });
    };

    return (
        <>
        </>
    );

}