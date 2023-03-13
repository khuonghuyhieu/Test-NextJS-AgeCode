import React from 'react'
import Header from './Header'

export interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <div className='w-full flex justify-center'>
      <div className="e-body">
        <Header />
        <main >{children}</main>
      </div>
    </div>
  )
}

export default Layout
