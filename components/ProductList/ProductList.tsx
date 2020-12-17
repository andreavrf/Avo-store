import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import Link from 'next/link'

type ProductListProps = {
  products: TProduct[]
}

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <Link key={id} href="/product/[id]" as={`/product/${id}`} passHref>
      <div>
        <Card style={{ width: '19.7rem', marginBottom: '2rem' }}>
          <Card.Img src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{'$ ' + price}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Link>
  ))

const ProductList = ({ products }: ProductListProps) => (
  <CardDeck>{mapProductsToCards(products)}</CardDeck>
)

export default ProductList
