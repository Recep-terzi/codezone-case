'use client'

import Navbar from '@/components/Navbar/Navbar'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Navbar />
      {children}
    </Provider>
  )
}
