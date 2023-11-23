import Link from 'next/link';
const NavBar = () => {
  return (
    <nav className='bg-slate-900 py-3'>
      <div className='container mx-auto flex justify-between items-center '>
        <h3 className='font-bold text-3xl'>
          NextCrud
        </h3>
        <ul className='flex  gap-x-2'>
          <li>
            <Link href='/' className='text-lg font-medium hover:text-slate-200'>Tasks</Link>
          </li>
          <li>
            <Link href='/new' className='text-lg font-medium hover:text-slate-200'>New Task</Link>
          </li>
          <li>
            <Link href='/abaout' className='text-lg font-medium hover:text-slate-200'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar