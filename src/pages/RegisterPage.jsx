import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { signUp } from '../actions/authActions';

import { clearError, setError } from '../actions/uiActions';
import useForm from '../hooks/useForm';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector(({ ui }) => ui)
  const [ state, handleInputChange ] = useForm({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  });

  const { email, name, password, confirmPassword } = state;

  const handleRegister = (evt) => {
    evt.preventDefault();
    if (isFormValid()) {
      dispatch(signUp({ email, name, password }));
    }
  };

  const isFormValid = () => {
    if (name.trim().length < 2) {
      dispatch(setError('Name is not valid'));
      return false;
    } if (!validator.isEmail( email )) {
      dispatch(setError('Email is not valid'));
      return false;
    } if (password !== confirmPassword || password.length < 6) {
      dispatch(setError('Password is not valid or not match'));
      return false;
    }
    dispatch(clearError());
    return true;
  }

  return (
    <>
      <h3 className="auth__title mb-4">Register</h3>
      {
        error && (
          <div className="auth__alert-error">
            { error }
          </div>
        )
      }
      <form onSubmit={ handleRegister }>
        <input
          autoComplete="none"
          className="auth__input mb-2"
          name="name"
          onChange={ handleInputChange }
          placeholder="Your Name"
          required
          type="text"
          value={name}
        />
        <input
          autoComplete="off"
          className="auth__input mb-2"
          name="email"
          onChange={ handleInputChange }
          placeholder="tu@email.com"
          required
          type="email"
          value={email}
        />
        <input
          className="auth__input mb-2"
          name="password"
          onChange={ handleInputChange }
          placeholder="TuContraseñ@"
          required
          type="password"
          value={password}
        />
        <input
          className="auth__input mb-2"
          name="confirmPassword"
          onChange={ handleInputChange }
          placeholder="TuContraseñ@"
          required
          type="password"
          value={confirmPassword}
        />
        <button
          className="btn btn-block btn-primary mb-2"
          disabled={loading}
          type="submit"
        >Register</button>
        <Link
          className="link d-block"
          to="/auth/login"
        >Already register?</Link>
      </form>
    </>
  );
};

export default RegisterPage;
