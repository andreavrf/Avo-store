import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Avocado } from '@components/SVGIcons'

const Navbar = () => {
  const { pathname } = useRouter()
  return <nav className="navbar"></nav>
}

export default Navbar
