import React from 'react';
import Sidebar from '../components/Sidebar';

const JournalPage = () => (
  <div className="journal__wrapper">
    <Sidebar />
    <main style={{ flex: 1 }}>
      Main Content
    </main>
  </div>
);

export default JournalPage;
