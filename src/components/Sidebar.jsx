import React from 'react'
import JournalEntries from './JournalEntries'

const Sidebar = () => {
  return (
    <aside className="journal__sidebar-container">
      <div className="journal__sidebar-nav">
        <b>
          <i className="far fa-heart"></i>
          <span> Goccita</span>
        </b>
        <button className="btn btn-outline-white">Logout</button>
      </div>
      <div className="journal__sidebar-new">
        <i className="far fa-plus-square fa-5x"></i>
        <p className="mt-2">New entry</p>
      </div>
      <JournalEntries />
    </aside>
  )
}

export default Sidebar
