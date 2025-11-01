import React from 'react'
import { useSelector } from 'react-redux'
import {LogoutButton, Logo, Container} from '../'
import { Link } from 'react-router';
import { useNavigate } from 'react-router';

function Header() {

  const {authStatus, user} = useSelector((state) => {state.authSliceReducer.status , state.authSliceReducer.user});
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus
    },
    {
      name: 'Sign Up',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus
    }
  ]

  return (
    <div className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
            <div className='mr-4'>
              <Link to='/'>
                <Logo width='100px'/>
              </Link>

              <ul className='flex ml-auto'>
                {navItems.map((item) => (
                  item.active ? (
                    <li key={item.name}> 
                      <button onClick={() => navigate(item.slug)} className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                        {item.name}
                      </button>
                    </li>
                  ) : (null)
                ))}
                {authStatus && (
                  <li>
                    <LogoutButton/>
                  </li>
                )}
              </ul>
            </div>
        </nav>
      </Container>
    </div>
  )
}

export default Header