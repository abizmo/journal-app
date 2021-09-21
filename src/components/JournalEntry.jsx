import React from 'react'

const JournalEntry = () => {
  const imageUrl = 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
  return (
    <div className="journal__entry-container">
      <div
        className="journal__entry-image"
        style={{ backgroundImage: `url(${imageUrl})`}}
      />
      <div className="journal__entry-body">
        <p className="journal__entry-title">
          Hola
        </p>
        <p className="journal__entry-content">
          Veniam sit veniam eiusmod velit aliqua qui officia ea aliquip adipisicing.
        </p>
      </div>
      <div className="journal__entry-daybox">
        <span className="journal__entry-text">Monday</span>
        <span className="journal__entry-number">28</span>
      </div>
    </div>
  )
}

export default JournalEntry
