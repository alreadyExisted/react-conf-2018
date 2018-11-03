import React, { useState, useEffect } from 'react'
import { PoseGroup } from 'react-pose'
import { shuffle } from './params'
import theme from './theme.module.css'

const DURATION = 500

export const ShaffleList = ({ initialItems, item: ItemComponent, title }) => {
  const [items, setItems] = useState(initialItems)
  const [isPush, setPush] = useState(true)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setItems(shuffle(items, isPush))
      setPush(!isPush)
    }, DURATION)
    
    return () => clearInterval(interval)
  }, [items, isPush])
  
  return <div>
    <h2>{title}</h2>
    <ul className={theme.list}>
      <PoseGroup>
        {items.map(item => <ItemComponent
          key={item.id}
          className={theme.item}
          children={item.value}
        />)}
      </PoseGroup>
    </ul>
  </div>
}