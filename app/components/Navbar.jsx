import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Logo from './dojo-logo.png'

function Navbar(){
  return (
    <nav>
        <Image
        src={Logo}
        alt='Dojo Helpdesk logo'
        width={70}
        quality={100}
        placeholder='blur'
        />
          <h1>Dojo Help desk</h1>
          <Link href="/">Dashboard</Link>
          <Link href="/tickets">Tickets</Link>
          

        </nav>

  )
}

export default Navbar;