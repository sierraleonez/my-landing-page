import { Styles } from './style'

type IButton = {
  children: React.ReactNode
  onClick: () => void
}

const Button = ({children, onClick}: IButton) => {
  return (
    <button 
      onClick={onClick}
      style={Styles.container}
      onMouseEnter={e => {
        e.currentTarget.style.background = '#c42d2d'
        e.currentTarget.style.boxShadow = '0px 8px 30px #c42d2d'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = '#F53838'
        e.currentTarget.style.boxShadow = '0px 8px 30px #F53838'
      }}
    >
      {children}
    </button>
  )
}

export default Button