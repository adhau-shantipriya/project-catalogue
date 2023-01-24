import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <header className='site-header shadow-md py-2 bg-white '>
      <div className="container mx-auto">
        <nav className='relative'>
          <ul className='lg:flex lg:flex-row'>
            <li className='p-2 hover:text-blue-500'>
              <Link href="/" legacyBehavior>
                <a className={router.pathname == "/" ? "text-blue-500" : ""}>
                  Home
                </a>
              </Link>
            </li>
            <li className='p-2 hover:text-blue-500'>
              <Link href="/add" legacyBehavior>
                <a className={router.pathname == "/add" ? "text-blue-500" : ""}>
                  Add
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
