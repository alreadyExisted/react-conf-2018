import React from 'react'
import posed from 'react-pose'
import { tween } from 'popmotion'
import theme from './theme.module.css'
import { FadeBox } from 'components/fade-box'
import { ShaffleList } from 'components/shaffle-list'
import { generateItems } from 'components/shaffle-list/params'

const Item1 = posed.li({
  flip: {
    transition: tween
  }
})

const Item2 = posed.li({
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
})

export const App = () => {
  return <section className={theme.wrap}>
    <FadeBox />
    <div className={theme.container}>
      <ShaffleList
        initialItems={generateItems()}
        item={Item1}
        title="List without flip"
      />
      <ShaffleList
        initialItems={generateItems()}
        item={Item2}
        title="List with flip and opacity"
      />
    </div>
  </section>
}
