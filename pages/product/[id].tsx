import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '@components/Layout/Layout'

const ProductPage = () => {
  const [product, setProduct] = useState<TProduct | null>(null)
  const { query } = useRouter()

  useEffect(() => {
    window
      .fetch(`/api/avo/${query.id}`)
      .then((res) => res.json())
      .then((data: TProduct) => {
        setProduct(data)
      })
  }, [query.id])

  return <Layout> {product == null}</Layout>
}
export default ProductPage
