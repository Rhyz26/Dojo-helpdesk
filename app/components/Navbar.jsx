import Link from 'next/link'

import React from 'react'

function Navbar(){
  return (
    <nav>
          <h1>Dojo Help desk</h1>
          <Link href="/">Dashboard</Link>
          <Link href="/tickets">Tickets</Link>
          

        </nav>

  )
}

export default Navbar;