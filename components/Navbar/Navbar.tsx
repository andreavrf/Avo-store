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
      <Container>
        <Row>
          <Col md={4}>
            <Link href="/">
              <Nav className="mr-auto">
                <Nav.Link href="/">Store</Nav.Link>
              </Nav>
            </Link>
          </Col>
          <Col>
            <Link href="/">
              <Nav className="mr-auto">
                <Basket />
                <Nav.Link href="/">Canast</Nav.Link>
              </Nav>
            </Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
  )
}

export default navbar
