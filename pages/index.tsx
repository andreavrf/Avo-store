import React, { useState, useEffect } from 'react'
import Header from '@components/Header/Header'
import Layout from '@components/Layout/Layout'
import ProductList from '@components/ProductList/ProductList'
import { Container } from 'react-bootstrap'
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
      <Container>
        <ProductList products={productList} />
      </Container>
    </Layout>
  )
}

export default HomePage
