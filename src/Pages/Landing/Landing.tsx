import React from 'react'
import Lottie from 'react-lottie'
import image from '../../Asset/images'
import { code } from '../../Asset/lotties'
import { Button } from '../../Components'
import { openInNewTab } from '../../utils'
import './style.css'

export default function Landing() {
  return (
    <Container>
      <AboutMe />
    </Container>
  )
}

function Container({ children }: { children: React.ReactChild }) {
  return (
    <div className='container'>
      {children}
    </div>
  )
}

type ContactDetailProps = {
  name: string
  image: any,
  onPress: () => void
}
const ContactDetail: ContactDetailProps[] = [
  {
    name: 'linkedin',
    image: image.linkedin,
    onPress: () => openInNewTab('https://www.linkedin.com/in/alm%C3%A8r-andika/'),
  },
  {
    name: 'github',
    image: image.github,
    onPress: () => openInNewTab('https://github.com/sierraleonez/'),
  },
  {
    name: 'email',
    image: image.email,
    onPress: () => openInNewTab('mailto:almerandika809@gmail.com?subject=JobOpportunities?&body=message%20goes%20here'),
  },
]

function Contact() {
  return (
    <div>
      {ContactDetail.map(item => {
        return (
          <Button type='origin' onClick={item.onPress} key={item.name}>
              <img src={item.image} width={'30em'} height={'30em'} className='contactItem'/>
          </Button>
        )
      })}
    </div>
  )
}
function AboutMe() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: code,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className='contentContainer'>
      <div>
        <Lottie
          options={defaultOptions}
          height={'12em'}
          width={'12em'}
          />
      </div>
      <div className='aboutContainer'>
        <p className='aboutText'>Hello, <BoldText content='Almer Andika '/> here</p>
        <p className='aboutText'>
          I am {' '}
          <BoldText content='Fullstack Mobile Developer '/>
          with high interest on
          <BoldText content=' DevOps '/>
          culture
        </p>
        <Contact />
      </div>
    </div>
  )
}

function BoldText({ content, fontSize = '1.2em' }: { content: string, fontSize?: string | number }) {
  return (
    <span style={{ fontWeight: 'bold', fontSize: fontSize }}>
      {content}
    </span>
  )
}