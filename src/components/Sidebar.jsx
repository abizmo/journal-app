import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../actions/authActions';
import JournalEntries from './JournalEntries';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <aside className="journal__sidebar-container">
      <div className="journal__sidebar-nav">
        <b>
          <i className="far fa-heart"></i>
          <span> Goccita</span>
        </b>
        <button
          className="btn btn-outline-white"
          onClick={ handleLogout }
        >Logout</button>
      </div>
      <div className="journal__sidebar-new">
        <i className="far fa-plus-square fa-5x"></i>
        <p className="mt-2">New entry</p>
      </div>
      <JournalEntries />
    </aside>
  );
};

export default Sidebar;
