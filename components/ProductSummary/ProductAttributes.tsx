import React from 'react'
import { Table } from 'react-bootstrap'

const ProductAttributes = ({
  description,
  ...otherAttributes
}: TProductAttributes) => {
  return (
    <div className="container">
      <div className="container_description">
        <hr />
        <b>Description</b>
        <p> {description}</p>
      </div>
      <Table
        bordered
        style={{ width: '30rem', margin: 'auto', marginTop: '3rem' }}
      >
        <thead className="table-active">
          <tr>
            <th colSpan={2} className="text-center">
              Attributes
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(otherAttributes).map((key) => {
            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{otherAttributes[key as keyof typeof otherAttributes]}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <style jsx>{`
        .container_description {
          margin-left: 8rem;
          margin-rigth: 8rem;
        }
      `}</style>
    </div>
  )
}

export default ProductAttributes
