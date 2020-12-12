import React from 'react'
import { Avocado } from '@components/SVGIcons'

const Header = () => {
  return (
    <div className="header_container">
      Platzi
      <Avocado />
      Avo
      <style jsx>{`
        .header_container {
          font-size: 30px;
          text-align: center;
          margin-top: 10px;
        }
      `}</style>
    </div>
  )
}

export default Header
