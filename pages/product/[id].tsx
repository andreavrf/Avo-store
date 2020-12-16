import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ProductDetail from '@components/ProductDetail/ProductDetail'
import ProductAttributes from '@components/ProductDetail/ProductAttributes'
import Layout from '@components/Layout/Layout'

const ProductPage = () => {
  const { query } = useRouter()
  const [product, setProduct] = useState<TProduct | null>(null)

  useEffect(() => {
    if (query.id) {
      window
        .fetch(`/api/avo/${query.id}`)
        .then((response) => response.json())
        .then((data: TProduct) => {
          setProduct(data)
        })
    }
  }, [query.id])

  return (
    <Layout>
      {product == null ? null : <ProductDetail product={product} />}
    </Layout>
  )
}

export default ProductPage
