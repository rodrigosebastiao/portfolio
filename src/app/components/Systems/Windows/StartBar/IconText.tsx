import React from 'react'

export default function IconText({children}: {children: React.ReactNode}) {
  return (
    <span className={`ml-5 text-xs`}>
      {children}
    </span>
  )
}
