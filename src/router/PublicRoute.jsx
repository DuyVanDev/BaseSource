import React, { Suspense } from 'react'

const PublicRoute = ({children}) => {
  return (
    <Suspense >{children}</Suspense>
  )
}

export default PublicRoute