import React from 'react'

interface SidebarContextType {
  expanded?: boolean
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>
  handleToggle: () => void
}

interface SidebarProviderProps {
  children: React.ReactNode
}

export const SidebarContext = React.createContext<SidebarContextType>({
  expanded: true,
  setExpanded: () => true,
  handleToggle: () => {},
})

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [expanded, setExpanded] = React.useState(false)

  /* recover state */

  const handleToggle = () => {
    setExpanded((prev) => !prev)
  }

  return (
    <>
      <SidebarContext.Provider
        value={{
          expanded,
          setExpanded,
          handleToggle,
        }}
      >
        {children}
      </SidebarContext.Provider>
    </>
  )
}
