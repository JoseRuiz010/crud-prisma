import React from 'react'
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='  flex h-[calc(100vh-6rem)] justify-center items-center'>
      <div className='text-center'>
        <h1 className='text-bold text-4xl'>
          NotFound
        </h1>
        <Link className='  text-xl mt-5 text-slate-400' href="/">
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

export default NotFound