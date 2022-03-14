import { Styles } from './style'

type IButton = {
  children: React.ReactNode
  onClick: () => void
  type: ButtonType
}

type ButtonType = 'origin' | 'primary'

const Button = ({ children, onClick, type }: IButton) => {
  return (
    <button 
      onClick={onClick}
      style={type === 'primary' ? Styles.primaryContainer : Styles.originContainer}
      onMouseEnter={e => {
        if (type === 'primary') {
          e.currentTarget.style.background = '#c42d2d'
          e.currentTarget.style.boxShadow = '0px 8px 30px #c42d2d'
        }
      }}
      onMouseLeave={e => {
        if (type === 'primary') {
          e.currentTarget.style.background = '#F53838'
          e.currentTarget.style.boxShadow = '0px 8px 30px #F53838'
        }
      }}
    >
      {children}
    </button>
  )
}

export default Button