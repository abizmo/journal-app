import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import JournalEntries from './JournalEntries';

import { signOut } from '../actions/auth';
import { newNote } from '../actions/notes';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.auth)

  const handleNewNote = () => {
    dispatch(newNote());
  };

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <aside className="journal__sidebar-container">
      <div className="journal__sidebar-nav">
        <b>
          <i className="far fa-heart"></i>
          <span> { name }</span>
        </b>
        <button
          className="btn btn-outline-white"
          onClick={ handleLogout }
        >Logout</button>
      </div>
      <div
        className="journal__sidebar-new"
        id="new"
        onClick={ handleNewNote }
      >
        <i className="far fa-plus-square fa-5x"></i>
        <p className="mt-2">New entry</p>
      </div>
      <JournalEntries />
    </aside>
  );
};

export default Sidebar;
