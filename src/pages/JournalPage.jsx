import React from 'react';
import { useSelector } from 'react-redux';

import NothingSelected from '../components/NothingSelected';
import Sidebar from '../components/Sidebar';
import NotesPage from './NotesPage';

const JournalPage = () => {
  const { active } = useSelector(state => state.notes);

  return (
    <div className="journal__wrapper">
      <Sidebar />
      <main style={{ flex: 1 }}>
        {
          (!active)
            ? <NothingSelected />
            : <NotesPage />
        }
      </main>
    </div>
  );
};

export default JournalPage;
