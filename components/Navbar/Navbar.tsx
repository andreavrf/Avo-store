import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Navbar, Nav } from 'react-bootstrap'

import { Avocado } from '@components/SVGIcons'
import ShoppingCartIcon from './ShoppingCartIcon'
import { useCart } from '@store/Cart'

const navbar = () => {
  // const { pathname } = useRouter()
  const { count: cartCount } = useCart()
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
          <Link href="/cart">
            <Nav>
              <ShoppingCartIcon name="Canast" cartCount={cartCount} />
            </Nav>
          </Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default navbar
