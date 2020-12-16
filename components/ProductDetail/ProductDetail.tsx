import React from 'react'
import { Media } from 'react-bootstrap'
import ProductAttributes from '@components/ProductDetail/ProductAttributes'
import AddToCart from '@components/ProductDetail/AddToCart'
type ProductDetailProps = {
  product: TProduct
}
const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <div>
      <Media style={{ margin: 'auto', marginLeft: '18rem' }}>
        <img
          width={400}
          height={400}
          className="mr-3"
          src={product.image}
          alt={product.name}
        />
        <Media.Body style={{ margin: 'auto' }}>
          <h5>{product.name}</h5>
          <p>{product.price}</p>
          <p>SKU:{product.sku}</p>
          <AddToCart product={product} />
        </Media.Body>
      </Media>
      <ProductAttributes {...product.attributes} />
    </div>
  )
}
export default ProductDetail
