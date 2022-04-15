import React from 'react'
import '../styles/LoginPage.css'
import ModalLogin from '../Components/ModalLogin'
import NewUserModal from '../Components/NewUserModal'
import { useState } from 'react'


function LoginPage() {

  const [openModal, setOpenModal] = useState(false);
  const [newUserModal, setNewUserModal] = useState(false);

  return (
    <div className='LoginPage'>
      <div className='LoginContent'>
        <h3>Please log in to continue browsing...</h3>
        <button className='btnLogin' onClick={() => setOpenModal(true)}>Log in</button>
      </div>
      <ModalLogin
        trigger={openModal}
        setTrigger={setOpenModal}
        newUserTrigger={() => setNewUserModal(true)} />
      <NewUserModal
        trigger={newUserModal}
        setTrigger={setNewUserModal} />
    </div>
  )
}

export default LoginPage