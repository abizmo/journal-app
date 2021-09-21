import React from 'react';
// import NothingSelected from '../components/NothingSelected';
import Sidebar from '../components/Sidebar';
import NotesPage from './NotesPage';

const JournalPage = () => (
  <div className="journal__wrapper">
    <Sidebar />
    <main style={{ flex: 1 }}>
      {/* <NothingSelected /> */}
      <NotesPage />
    </main>
  </div>
);

export default JournalPage;
