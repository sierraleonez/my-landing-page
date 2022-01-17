import React from 'react'

interface Stylesheet {
  [key: string]: React.CSSProperties
}

export const Styles: Stylesheet = {
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
}
