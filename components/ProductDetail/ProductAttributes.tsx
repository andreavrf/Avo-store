import React from 'react'
import { Table } from 'react-bootstrap'

const ProductAttributes = ({
  description,
  ...otherAttributes
}: TProductAttributes) => {
  return (
    <div className="container">
      <hr />
      <div>
        <b>Description</b>
        <p> {description}</p>
      </div>
      <Table bordered>
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
    </div>
  )
}

export default ProductAttributes
