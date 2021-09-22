import React from 'react'
import NotesBar from '../styles/components/NotesBar'

const NotesPage = () => {
  return (
    <div className="notes__container">
      <NotesBar />
      <div className="notes__new-note">
        <input
          className="notes__input"
          placeholder="An awesome note"
          type="text"
        />
        <textarea
          className="notes__textarea"
          placeholder="Once upon a time..."
        />
        <img
          alt="new note"
          className="notes__image"
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        />
      </div>
    </div>
  )
}

export default NotesPage
