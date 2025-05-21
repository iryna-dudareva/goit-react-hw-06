import React from 'react'
import css from './Contact.module.css'
import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Contact = ({data, onDelete}) => {
  const {id, name, number}= data;
  return (
    <div className={css.contactWrapper}>
      <div className={css.textWrapper}>
        <div className={css.itWrapper}>
          <FaUserAlt className={css.icon}/>
          <p className={css.text}>{name}</p>
        </div>
        <div className={css.itWrapper}>
          <FaPhone className={css.icon}/>
          <p className={css.text}>{number}</p>
        </div>
      </div>
      <button className={css.deleteBtn} onClick={() => onDelete(id)}>Delete</button>
    </div>
  )
}

export default Contact