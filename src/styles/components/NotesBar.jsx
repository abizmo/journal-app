import React from 'react';
import { useDispatch } from 'react-redux';
import { saveNote, uploadImage } from '../../actions/notesActions';

const NotesBar = () => {
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(saveNote());
  };

  const handleAddImage = () => {
    document.querySelector('#fileInput').click();
  }

  const handleUpload = (evt) => {
    const file = evt.target.files[0];

    if (file) {
      dispatch(uploadImage(file));
    }
  }

  return (
    <div className="notes__bar-container">
      <p>19th March 2021</p>
      <input
        id="fileInput"
        name="fileInput"
        onChange={ handleUpload }
        style={{ display: 'none' }}
        type="file"
      />
      <div>
        <button
          className="btn btn-outline-white mr-1"
          onClick={ handleAddImage }
        >Add Picture</button>
        <button
          className="btn btn-white"
          onClick={ handleSave }
        >Save</button>
      </div>
    </div>
  );
};

export default NotesBar;
