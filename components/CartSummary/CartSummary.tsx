import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'

type CartSummaryProps = {
  totalAmount: number
}

const CartSummary = ({ totalAmount }: CartSummaryProps) => {
  return (
    <div>
      <ListGroup style={{ margin: '0rem 10rem 16rem 10rem' }}>
        <ListGroup.Item>
          <strong>Sub total:</strong>
          {` ${'$ ' + totalAmount}`}

          <Button variant="dark" style={{ float: 'right' }}>
            Check out
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default CartSummary
