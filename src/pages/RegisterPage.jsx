import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => (
  <>
    <h3 className="auth__title mb-4">Register</h3>
    <form>
      <input
        autoComplete="none"
        className="auth__input mb-2"
        name="name"
        placeholder="Your Name"
        required
        type="text"
      />
      <input
        autoComplete="off"
        className="auth__input mb-2"
        name="email"
        placeholder="tu@email.com"
        required
        type="email"
      />
      <input
        className="auth__input mb-2"
        name="password"
        placeholder="TuContraseñ@"
        required
        type="password"
      />
      <input
        className="auth__input mb-2"
        name="confirm-password"
        placeholder="TuContraseñ@"
        required
        type="password"
      />
      <button
        className="btn btn-block btn-primary mb-2"
        type="submit"
      >Register</button>
      <Link
        className="link d-block"
        to="/auth/login"
      >Already register?</Link>
    </form>
  </>
);

export default RegisterPage;
