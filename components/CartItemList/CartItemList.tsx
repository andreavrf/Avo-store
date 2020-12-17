import React from 'react'
import Link from 'next/link'
import { Alert, Button, Media } from 'react-bootstrap'
import { CartItemType } from '@store/Cart'

type CartItemListProps = {
  items: CartItemType[]
  removeFromCart: (product: TProduct) => void
  loading?: boolean
}

const CartItemList = ({
  items,
  removeFromCart,
  loading = false,
}: CartItemListProps) => {
  if (items.length === 0)
    return (
      <Alert
        variant="danger"
        style={{
          margin: '3rem 10rem 3rem 10rem',
        }}
      >
        <Alert.Heading>Your cart is empty</Alert.Heading>
        <p>
          You will need to add some items to the cart before you can checkout.
        </p>
      </Alert>
    )

  const mapCartItemsToItems = (items: CartItemType[]) =>
    items.map((cartItem) => {
      const { id, name, quantity, price, image } = cartItem

      return (
        <div key={id}>
          <Media style={{ margin: 'auto', marginLeft: '10rem' }}>
            <img
              width={200}
              height={200}
              className="mr-3"
              src={image}
              alt={name}
            />
            <Media.Body style={{ margin: 'auto' }}>
              <Link href="/product/[id]" as={`/product/${id}`} passHref>
                <a className="link_name">
                  <h5>{name}</h5>
                </a>
              </Link>
              <p>
                {quantity} x {'$ ' + price}
              </p>
              <p>Some more information goes here...</p>
              <Button
                className="col-2"
                variant="outline-danger"
                onClick={() => removeFromCart(cartItem)}
              >
                Delete
              </Button>
            </Media.Body>
          </Media>
          <style jsx>{`
            .link_name {
              color: #000;
              text-decoration: none;
            }
            .link_name:hover {
              color: #6d7476;
              text-decoration: none;
            }
          `}</style>
        </div>
      )
    })

  return <div>{mapCartItemsToItems(items)} </div>
}

export default CartItemList
