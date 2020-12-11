import React, { useState, useEffect } from 'react'
import Header from '@components/Header/Header'
import Layout from '@components/Layout/Layout'
import ProductList from '@components/ProductList/ProductList'
const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])
  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((res) => res.json())
      .then(({ data }) => {
        setProductList(data)
      })
  }, [])
  return (
    <Layout>
      <Header />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
