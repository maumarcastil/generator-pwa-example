import React from 'react'
import { Fragment } from 'react/jsx-runtime'
import { FiMenu, FiX } from 'react-icons/fi'
import { Outlet, useLocation } from 'react-router-dom'

import { Sidebar, SidebarItem } from '../components/sidebar'

import { SidebarContext } from '../context/sidebarContext'

import { SIDEBAR_ITEMS } from '../mocks/sidebarItems'

export const DashboardLayout = () => {
  const { pathname } = useLocation()
  const { expanded, handleToggle } = React.useContext(SidebarContext)
  return (
    <>
      <div className="flex h-full md:min-h-screen">
        {/* Aside */}
        <Sidebar>
          {SIDEBAR_ITEMS.map((item, index) => (
            <Fragment key={item.path}>
              {index === SIDEBAR_ITEMS.length - 2 && <hr className="my-3" />}
              <SidebarItem
                alert={item.alert}
                path={item.path}
                text={item.text}
                icon={item.icon}
                active={
                  (pathname === '/dashboard' && item.path === '') ||
                  (pathname.endsWith(item.path) && item.path !== '')
                }
              />
            </Fragment>
          ))}
        </Sidebar>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <header className="bg-white  shadow-sm p-4">
            <nav className="flex justify-between md:flex-row-reverse">
              <button
                onClick={handleToggle}
                className="py-2 px-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors md:hidden"
              >
                {expanded ? <FiX size={20} /> : <FiMenu size={20} />}
              </button>
              <div>
                <a href="#">Logout</a>
              </div>
            </nav>
          </header>

          {/* Main content area */}
          <main className="flex-1 p-4">
            {/* Aquí irá tu contenido */}
            <Outlet />
          </main>
        </div>
      </div>
    </>
  )
}
