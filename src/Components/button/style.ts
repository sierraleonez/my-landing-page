import React from 'react'

interface Stylesheet {
  [key: string]: React.CSSProperties
}

export const Styles: Stylesheet = {
  container: {
    backgroundColor: '#F53838',
    alignSelf: 'flex-start',
    paddingRight: 64,
    paddingLeft: 64,
    border: 'none',
    borderRadius: 10,
    boxShadow: '0px 8px 30px #F53838'
  },
}
