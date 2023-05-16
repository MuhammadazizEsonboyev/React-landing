import React, { useState, useEffect } from 'react'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  HamburgerIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './Navbar.elements'
import { FaTimes, FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

function Navbar () {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  console.log(button);
  const [homeClick, setHomeClick] = useState(false)
  const [servicesClick, setServicesClick] = useState(false)
  const [productsClick, setProductsClick] = useState(false)
  console.log(productsClick);

  console.log(servicesClick)
  const handleHomeClick = () => {
    setHomeClick(true)
    setProductsClick(false)
    setServicesClick(false)
  }


  const handleClick = () => setClick(!click)

  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    // so if the screensize is <= 960px then set button state to false
    if (window.innerwidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
              <NavIcon />
            </NavLogo>
            <HamburgerIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </HamburgerIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
