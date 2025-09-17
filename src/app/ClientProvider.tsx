'use client'

import Navbar from '@/components/Navbar/Navbar'
import { setData } from '@/redux/case/caseSlice'
import { store } from '@/redux/store'
import { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import GlobalDataLoader from './GlobalDataLoader'

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  
  return (
    <Provider store={store}>
      <GlobalDataLoader />
      <Navbar />
      {children}
    </Provider>
  )
}
