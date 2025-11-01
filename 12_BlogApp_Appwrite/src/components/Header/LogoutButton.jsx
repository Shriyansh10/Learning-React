import React from 'react'
import authService from '../../appwrite/auth'
import {setIsLoggedOff} from '../../features/authSlice'
import { useDispatch } from 'react-redux'

function LogoutButton() {

  const dispatch = useDispatch();

  const handleLogout = () => {
    authService.logoutUser().then(()=> {
      dispatch(setIsLoggedOff())
    }).catch((error) => {console.log(error)})
  }
  return (
    <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
     onClick={handleLogout}>Logout</button>
  )
}

export default LogoutButton