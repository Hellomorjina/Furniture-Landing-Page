/* eslint-disable react/prop-types */
import ButtonIcon from '../../src/assets/button.png/'

const Button =({text}) => {
  return (
    <button className='text-sm text-primary flex items-center gap-1'
    >{text}  <img src={ButtonIcon} alt=""/></button>
  )
}

export default Button
