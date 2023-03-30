import React from 'react'
import "./list.scss"
import Card from '../card/Card'
import useFetch from '../../hooks/useFetch'

const List = ({catId, maxPrice,sort,subcats}) => {


    const {data, loading, error} = useFetch(`/products?populate=*&[filters][categories][id]=${catId}`)
    

  return (
    <div className="list">
    {
    loading?"loading":data?.map((item) => <Card item={item} key={item.id} />)}
  </div>
  )
}

export default List