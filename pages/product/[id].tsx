import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const [product, setProduct] = useState<TProduct>()
  const {
    query: { id },
  } = useRouter()

  useEffect(() => {
    window
      .fetch(`/api/avo/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data)
        console.log(data)
      })
  }, [id])

  return (
    <div>
      <div>product</div>
      <div>{product?.name}</div>
    </div>
  )
}
export default ProductPage
