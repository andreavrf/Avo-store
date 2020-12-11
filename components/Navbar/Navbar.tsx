import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Avocado } from '@components/SVGIcons'
import { Basket } from '@components/SVGIcons'
const navbar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand>
        <Avocado />
        Avo store
      </Navbar.Brand>

      <Link href="/">
        <Nav className="mr-auto">
          <Nav.Link href="/">Store</Nav.Link>
        </Nav>
      </Link>
      <Link href="/">
        <Nav className="mr-auto">
          <Basket />
          <Nav.Link href="/">Canast</Nav.Link>
        </Nav>
      </Link>
    </Navbar>
  )
}

export default navbar
