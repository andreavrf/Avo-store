import React from 'react'
import Link from 'next/link'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
  <div className="footer">
    <div className="container">
      <Row className="justify-content-md-center">
        <Col xs lg="2">
          About
        </Col>
        <Col xs lg="2">
          Services
        </Col>
        <Col xs lg="2">
          Made by
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs lg="2">
          <Link href="/about">
            <a className="link">Read more</a>
          </Link>
        </Col>
        <Col xs lg="2">
          <Link href="/">
            <a className="link">Products</a>
          </Link>
        </Col>
        <Col xs lg="2">
          <a
            className="link"
            href="https://www.linkedin.com/in/andrea-rosario-farias-11317a1b7/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Col>
      </Row>
    </div>

    <div className="colophon">
      <p className="colophon-entry">
        Icons made by{' '}
        <a
          target="_blank"
          href="https://www.flaticon.com/authors/freepik"
          title="Freepik"
        >
          Freepik
        </a>
        {' from '}
        <a target="_blank" href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </p>
      <p className="colophon-entry">
        Avocado images taken from{' '}
        <a
          className="acnor"
          target="_blank"
          href="https://www.californiaavocado.com/avocado101/avocado-varieties"
          title="California Avocado"
        >
          Avocado 101
        </a>
        {' at '}
        <a
          target="_blank"
          href="https://www.californiaavocado.com"
          title="Flaticon"
        >
          California Avocado
        </a>
      </p>
    </div>
    <style jsx>{`
      .footer {
        margin-top: 5rem;
        margin-bottom: 0px;
      }
      .container {
        margin-left: 2rem;
      }
      .link {
        text-decoration: none;
      }
      .colophon {
        text-align: center;
        margin-top: 3.2rem;
        font-size: 0.8rem;
      }
      .colophon-entry {
        color: grey;
        margin-bottom: 0;
      }
    `}</style>
  </div>
)

export default Footer
