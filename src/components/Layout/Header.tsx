import React from 'react'

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className='header w-full flex justify-center items-center'>
      <label className='title title-header font-normal'>カウンセラー</label>
    </header>
  )
}

export default Header
