import React from 'react'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

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
        <Nav>
          <Nav.Link href="/">Store</Nav.Link>
        </Nav>
      </Link>

      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <Link href="/">
            <Nav>
              <Basket />
              <Nav.Link href="/">Canast</Nav.Link>
            </Nav>
          </Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default navbar
