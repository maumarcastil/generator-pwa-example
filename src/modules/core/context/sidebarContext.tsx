import React from 'react'

interface SidebarContextType {
  expanded?: boolean
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

interface SidebarProviderProps {
  children: React.ReactNode
}

export const SidebarContext = React.createContext<SidebarContextType>({
  expanded: true,
  setExpanded: () => true,
})

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [expanded, setExpanded] = React.useState(true)

  /* recover state */

  return (
    <>
      <SidebarContext.Provider
        value={{
          expanded,
          setExpanded,
        }}
      >
        {children}
      </SidebarContext.Provider>
    </>
  )
}
