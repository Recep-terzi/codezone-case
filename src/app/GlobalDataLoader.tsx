'use client'

import { setData } from '@/redux/case/caseSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function GlobalDataLoader() {
  const dispatch = useDispatch()
    useEffect(() => {
          fetch('https://dummyjson.com/c/a7c4-016a-47aa-8241').then(res => res.json()).then(data => dispatch(setData(data)))
      }, [])

  return null
}
