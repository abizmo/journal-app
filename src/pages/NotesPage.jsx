import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { removeNote, setActive } from '../actions/notesActions';
import useForm from '../hooks/useForm';
import NotesBar from '../styles/components/NotesBar';

const NotesPage = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector(state => state.notes);
  const [formValues, handleInputChange, reset ] = useForm({ ...note });
  const { body, title, url } = formValues;

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(setActive({ ...formValues }))
  }, [formValues, dispatch]);

  const handleDelete = () => {
    dispatch(removeNote());
  }

  return (
    <div className="notes__container">
      <NotesBar />
      <div className="notes__new-note">
        <input
          autoComplete="off"
          className="notes__input"
          name="title"
          onChange={ handleInputChange }
          placeholder="An awesome note"
          type="text"
          value={title}
        />
        <textarea
          className="notes__textarea"
          name="body"
          onChange={ handleInputChange }
          placeholder="Once upon a time..."
          value={body}
        />
        {
          url && (
            <img
              alt="new note"
              className="notes__image"
              src={url} />
          )
        }
      </div>
      <button
        className="btn btn-danger"
        onClick={ handleDelete }
      >Delete</button>
    </div>
  );
};

export default NotesPage;
