import React from 'react'
import { Segment, Container, Grid, List, Header } from 'semantic-ui-react'

const Footer = () => {
  return (
    <Segment
      vertical
      as="footer"
      style={{
        padding: '4em 0em',
        marginTop: '3em',
        borderTop: '1px solid #f2f2f2',
      }}
    >
      <Container text>
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
            <a
              target="_blank"
              href="https://www.flaticon.com/"
              title="Flaticon"
            >
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
      </Container>

      <style jsx>{`
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
    </Segment>
  )
}

export default Footer
