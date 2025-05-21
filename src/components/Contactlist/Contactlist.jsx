import React from 'react'
import css from './Contactlist.module.css'
import Contact from '../Contact/Contact'


const Contactlist = ({contacts, onDelete}) => {
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <li className={css.contact} key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  )
}

export default Contactlist