import React, { useState, useEffect } from 'react';
import posed from 'react-pose';
import theme from './theme.module.css';

const DURATION = 500

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
})

export const FadeBox = () => {
  const [isVisible, setVisible] = useState(true)
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(!isVisible)
    }, DURATION)
    return () => clearTimeout(timeout)
  }, [isVisible])

  return <>
    <h2>Box with fade animation</h2>
    <Box
      className={theme.box}
      pose={isVisible ? 'visible' : 'hidden'}
    />
  </>
}