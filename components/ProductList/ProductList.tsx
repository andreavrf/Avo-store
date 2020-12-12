import React from 'react'
import { Card, CardDeck, Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

type ProductListProps = {
  products: TProduct[]
}

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <Link key={id} href="/product/[id]" as={`/product/${id}`}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  ))

const ProductList = ({ products }: ProductListProps) => (
  <CardDeck>{mapProductsToCards(products)}</CardDeck>
)

export default ProductList
