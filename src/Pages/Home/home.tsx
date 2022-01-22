import React, { useState } from 'react'

import { Styles } from './style'
import {
  Button
} from '../../Components'

import icon from '../../Asset/images'
import reactLogo from '../../logo.svg'

type PromotionalItem = {
  img: any
  line1: string
  line2: string
  isCenter: boolean
}

const PromotionalWords: PromotionalItem[] = [
  {
    img: icon.webIcon,
    line1: 'Professional+',
    line2: 'Web Result',
    isCenter: false,
  },
  {
    img: icon.codeIcon,
    line1: 'Maintainable',
    line2: 'Code Source',
    isCenter: true,
  },
  {
    img: icon.maintenanceIcon,
    line1: 'Guaranteed',
    line2: 'Maintenance Service',
    isCenter: false,
  },
]

const Home = () => {
  const [onHover, setOnHover] = useState<number>(0) 
  return (
    <div style={Styles.container}>
      <div className={'navigation-bar'} style={Styles.navBar}>
        <p style={Styles.navItem}>About</p>
        <p style={Styles.navItem}>MyWorks</p>
        <p style={Styles.navItem}>Contact</p>
      </div>
      <div style={Styles.contentContainer}>
        <div style={Styles.textContentContainer}>
          <p style={Styles.textContent}>
          Need someone <br/>
          To realize <br/>
          Your company Digitalization?
          </p>
          <p style={Styles.textLabel}>
            Provide a great tools for your great teams <br/>
            and attract more audience with user interactive application!
          </p>
          {/* <img
            onMouseEnter={() => setOnHover(1)} 
            onMouseLeave={() => setOnHover(0)}
            style={{
              filter: onHover === 1 ? "grayscale(0%)" : "grayscale(100%)",
              width: 200,
              height: 200
            }} 
            src={reactLogo}
          /> */}
          <Button onClick={() => console.log('j')}>
            <p style={Styles.buttonText}>Get Started</p>
          </Button>
        </div>
        <img src={icon.coverVector} alt={'coverImages'}/>
      </div>
      <div style={Styles.promotionalContainer}>
        {PromotionalWords.map(item => {
          return (
            <div style={item.isCenter ? Styles.promotionalItemCenter : Styles.row} key={item.img}>
              <img style={Styles.commonIcon} src={item.img} />
              <div>
                <p style={Styles.promotionalItemHeader}>{item.line1}</p>
                <p style={Styles.promotionalItemLabel}>{item.line2}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
