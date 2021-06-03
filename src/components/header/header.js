import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/images/logo.svg'

const HeaderLogo = styled.div`
  position: relative;
  width: 80px;
  > img {
    display: block;
    max-width: 100%;
  }
`

const HeaderDom = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`

function Header() {
  return (
    <HeaderDom className="header">
      <Link to="/" class="header__logo">
        <HeaderLogo><img src={logo} alt="logo" /></HeaderLogo>
      </Link>
      <div>
        <Link to="/about" class="header__logo">About</Link>
        <Link to="/products" class="header__logo">Products</Link>
      </div>
    </HeaderDom>
  )
}

export default Header
