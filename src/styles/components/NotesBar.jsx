import React from 'react';
import { useDispatch } from 'react-redux';
import { saveNote } from '../../actions/notesActions';

const NotesBar = () => {
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(saveNote());
  };

  return (
    <div className="notes__bar-container">
      <p>19th March 2021</p>
      <div>
        <button className="btn btn-outline-white mr-1">Add Picture</button>
        <button
          className="btn btn-white"
          onClick={ handleSave }
        >Save</button>
      </div>
    </div>
  );
};

export default NotesBar;
