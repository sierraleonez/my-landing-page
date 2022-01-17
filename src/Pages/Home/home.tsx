import React from 'react'

import { Styles } from './style'
import {
  Button
} from '../../Components'

const Home = () => {
  return (
    <div style={Styles.container}>
      <div>
        <p>About</p>
        <p>MyWorks</p>
        <p>Contact</p>
      </div>
      <div>
        You need someone to realize your company digitalization?
      </div>
      <Button onClick={() => console.log('j')}>Get Started</Button>
    </div>
  )
}

export default Home
