import React, { useState, useEffect } from 'react'

export const HomePage = () => {
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
    <div>
      {productList.map((product) => {
        return <div>{product.name}</div>
      })}
    </div>
  )
}

export default HomePage
