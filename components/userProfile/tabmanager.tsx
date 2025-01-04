'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function TabManager() {
const params = useSearchParams()
const tab = params.get('tab')

  return (
    <article className='bg-blue-500 w-[80%] flex flex-col items-center py-4 px-6 '>{tab || 'none'}</article>
  )
}
