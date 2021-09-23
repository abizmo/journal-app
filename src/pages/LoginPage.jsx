import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginWithEmailAndPassword, loginWithGoogle } from '../actions/authActions';
import useForm from '../hooks/useForm';

const LoginPage = () => {
  const dispatch = useDispatch();

  const [{ email, password }, handleInputChange ] = useForm({
    email: 'goccita@abizmo.dev',
    password: '123456',
  });

  const handleLogin = (evt) => {
    evt.preventDefault();
    dispatch(loginWithEmailAndPassword({ email, password }));
  };

  const handleGoogleSignIn = () => {
    dispatch(loginWithGoogle());
  }

  return (
    <>
      <h3 className="auth__title mb-4">Login</h3>
      <form onSubmit={ handleLogin }>
        <input
          autoComplete="off"
          className="auth__input mb-2"
          name="email"
          onChange={handleInputChange}
          placeholder="tu@email.com"
          required
          type="email"
          value={email}
        />
        <input
          className="auth__input mb-2"
          name="password"
          onChange={handleInputChange}
          placeholder="TuContraseñ@"
          required
          type="password"
          value={password}
        />
        <button
          className="btn btn-block btn-primary mb-2"
          type="submit"
        >Login</button>
        <div className="auth__social-networks">
          <p className="auth__label">Login with social networks</p>
          <div className="google-btn mt-2" onClick={ handleGoogleSignIn }>
            <div className="google-icon-wrapper">
              <img
                alt="google button"
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link
          className="link d-block"
          to="/auth/register"
        >Create new account</Link>
      </form>
    </>
  );
};

export default LoginPage;
