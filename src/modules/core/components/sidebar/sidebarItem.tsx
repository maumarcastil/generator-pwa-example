import React from 'react'
import { Link } from 'react-router-dom'

import { SidebarContext } from '../../context/sidebarContext'

import { cn } from '../../utils/cn'

interface SidebarItemProps {
  text: string
  icon: React.ReactNode
  alert?: boolean
  active?: boolean
  path: string
}

export const SidebarItem = (props: SidebarItemProps) => {
  const { text, icon, alert, active, path } = props

  const { expanded } = React.useContext(SidebarContext)

  return (
    <>
      <Link to={path}>
        <li
          className={cn(
            'relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group',
            {
              'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800':
                active,
              'hover:bg-indigo-50 text-gray-600': !active,
            },
          )}
        >
          {icon}
          <span
            className={cn('overflow-hidden transition-all', {
              'w-52 ml-3': expanded,
              'w-0': !expanded,
            })}
          >
            {text}
          </span>
          {alert && (
            <div
              className={cn('absolute right-2 w-2 h-2 rounded bg-indigo-400', {
                'top-2': !expanded,
              })}
            />
          )}

          {!expanded && (
            <div
              className={cn(
                'absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0',
              )}
            >
              <span>{text}</span>
            </div>
          )}
        </li>
      </Link>
    </>
  )
}
