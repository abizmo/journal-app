import moment from 'moment';
import React from 'react';
import { useDispatch } from 'react-redux';

import { setActive } from '../actions/notes';

const JournalEntry = ({ body, date, id, title, url }) => {
  const dispatch = useDispatch();
  const noteDate = moment(date);

  const handleClick = () => {
    dispatch(setActive({ body, date, id, title, url }));
  }

  return (
    <div
      className="journal__entry-container"
      onClick={ handleClick }
    >
      {
        url && (
          <div
            className="journal__entry-image"
            style={{ backgroundImage: `url(${ url })`}}
          />
        )
      }
      <div className="journal__entry-body">
        <p className="journal__entry-title">
          { title }
        </p>
        <p className="journal__entry-content">
          { body }
        </p>
      </div>
      <div className="journal__entry-daybox">
        <span className="journal__entry-text">{ noteDate.format('dddd') }</span>
        <span className="journal__entry-number">{ noteDate.format('Do') }</span>
      </div>
    </div>
  );
};

export default JournalEntry;
