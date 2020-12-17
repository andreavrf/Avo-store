import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Navbar, Nav } from 'react-bootstrap'

import { Avocado } from '@components/SVGIcons'
import ShoppingCartIcon from './ShoppingCartIcon'
import { useCart } from '@store/Cart'

const navbar = () => {
  const { pathname } = useRouter()
  const { count: cartCount } = useCart()
  return (
    <Navbar>
      <Navbar.Brand>
        <Link href="/" passHref>
          <Nav>
            <Nav.Link href="/">
              <Avocado />
              Avo store
            </Nav.Link>
          </Nav>
        </Link>
      </Navbar.Brand>

      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <Link href="/cart" passHref>
            <Nav>
              <Nav.Link href="/cart">
                <ShoppingCartIcon name="Canast" cartCount={cartCount} />
              </Nav.Link>
            </Nav>
          </Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default navbar
