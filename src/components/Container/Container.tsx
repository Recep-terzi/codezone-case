import React, { ReactNode } from 'react'

interface IPropsContainer{
    children?:ReactNode;
}

const Container: React.FC<IPropsContainer> = ({children}) => {
  return (
    <div className='lg:px-[80px] px-5'>
        {children}
    </div>
  )
}

export default Container