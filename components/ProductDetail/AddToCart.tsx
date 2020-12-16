import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useCartMutations } from '@store/Cart'
type AddToCartProps = {
  product: TProduct
}

const addToCartRequest = () =>
  new Promise((resolve, reject) => {
    window.setTimeout(resolve, 600)
  })

const validate = (quantity: number) => {
  let error = ''
  if (quantity < 1) error = "Can't be blank"

  return error
}

const AddToCart = ({ product }: AddToCartProps) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [visible, setVisible] = useState(false)
  const { addToCart } = useCartMutations()

  const toggleMessage = () => {
    setTimeout(() => {
      setVisible(false)
    }, 1000)
  }

  const handleSubmit = async () => {
    const error = validate(quantity)
    setError(error)

    if (!error) {
      setLoading(true)
      addToCartRequest()
        .then(() => {
          addToCart(product, quantity)
          setLoading(false)
          setQuantity(quantity)
          setVisible(true)
          toggleMessage()
        })
        .catch((err: Error) => {
          setError(`Error: ${err}` || 'Something went wrong')
          setLoading(false)
        })
    }
  }

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setQuantity(parseInt(target.value, 10))
  return (
    <div>
      <Form.Control
        className="col-3"
        type="number"
        placeholder="Quantity"
        value={quantity}
        min={1}
        step={1}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit} className="btn-success">
        Add to cart
      </Button>
    </div>
  )
}

export default AddToCart
