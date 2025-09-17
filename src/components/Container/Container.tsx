import React, { ReactNode } from 'react'

interface IPropsContainer{
    children?:ReactNode;
    className?:string;
}

const Container: React.FC<IPropsContainer> = ({children,className}) => {
  return (
    <div className={`lg:px-[80px] px-5 ${className}`}>
        {children}
    </div>
  )
}

export default Container