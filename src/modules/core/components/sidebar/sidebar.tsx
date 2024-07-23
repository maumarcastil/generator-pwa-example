import React from 'react'
import { App as CapacitorApp } from '@capacitor/app'
import { useLocation, useNavigate } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight, FiMoreVertical } from 'react-icons/fi'

import { SidebarContext } from '../../context/sidebarContext'

import { cn } from '../../utils/cn'
import LogoArli from '../../../../assets/LogoArli.png'

interface SidebarProps {
  children: React.ReactNode
}

export const Sidebar = ({ children }: SidebarProps) => {
  const { expanded, setExpanded } = React.useContext(SidebarContext)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  React.useEffect(() => {
    const handleBackButton = () => {
      if (expanded) {
        setExpanded(false)
        return
      } else if (pathname === '/dashboard' || pathname === '/login') {
        CapacitorApp.exitApp()
        return
      } else {
        navigate(-1)
        return
      }
    }
    CapacitorApp.addListener('backButton', handleBackButton)

    return () => {
      CapacitorApp.removeAllListeners()
    }
  }, [expanded])

  const handleToggle = () => {
    setExpanded((prev) => !prev)
  }

  return (
    <>
      <aside
        className={cn(
          'absolute z-20 md:static h-full md:h-screen transition-all duration-700',
          {
            'left-0': expanded,
            '-left-full': !expanded,
          },
        )}
      >
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          <div className="p-3 pb-2 flex justify-between items-center">
            <img
              alt="logo"
              src={LogoArli}
              className={cn(
                'overflow-hidden transition-all object-contain max-h-[32px]',
                {
                  'w-28': expanded,
                  'w-0': !expanded,
                },
              )}
            />
            <button
              onClick={handleToggle}
              className="py-2 px-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              {expanded ? (
                <FiChevronLeft size={20} />
              ) : (
                <FiChevronRight size={20} />
              )}
            </button>
          </div>

          {/* Sidebar provider */}

          <ul className="flex-1 px-3">{children}</ul>

          <div className="border-t flex p-3 items-center">
            {/* avatar */}
            <img
              alt="avatar"
              className="w-10 h-10 rounded-md"
              src="https://ui-avatars.com/api/?name=John+Doe&background=random"
            />

            {/* data user */}
            <div
              className={cn(
                `flex justify-between items-center overflow-hidden transition-all`,
                {
                  'w-52 ml-3': expanded,
                  'w-0': !expanded,
                },
              )}
            >
              <div className="leading-4">
                <h4 className="font-semibold capitalize">john doe</h4>
                <span className="text-xs  text-gray-600 ">
                  johndoe@gmail.com
                </span>
              </div>
              {/* more options */}
              <FiMoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>

      <div
        onClick={handleToggle}
        className={cn(
          'absolute z-10 w-full h-full bg-black bg-opacity-50 transition-all left-0 md:hidden',
          {
            'opacity-0 pointer-events-none': !expanded,
          },
        )}
      />
    </>
  )
}
