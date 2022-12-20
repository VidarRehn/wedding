//CSS
import styled from 'styled-components'
import { colors, flex } from '../styles/partials'
//resources
import Names from '../resources/names.png'

const Container = styled.nav`
    ${flex('row', 'flex-end', 'center')}
    position: fixed;
    top: 0;
    background-color: ${colors.main};
    width: 100%;
    z-index: 10;
    padding: 20px;
`
const ImageContainer = styled.a`
    width: 160px;
    opacity: 0;
    position: absolute;
    left: 20px;
    transition: .5s linear;

    img {
        max-height: 100%;
        max-width: 100%;
    }

    &.visible {
        opacity: 1;
    }
`
const NavLinks = styled.ul`
    ${flex('row', 'flex-start', 'center')};
    gap: 16px;
    margin-right: 20px;

    a {
        text-decoration: none;
        color: ${colors.secondary};
        font-size: 16px;
    }

    @media (max-width: 600px) {
      display: none;
    }
`
const Hamburger = styled.div`
    min-height: 27px;
    min-width: 40px;
    ${flex('column', 'center', 'center')};
    gap: 6px;
    cursor: pointer;

    @media (min-width: 600px) {
      display: none;
    }

    >span {
        height: 5px;
        width: 40px;
        background-color: ${colors.secondary};
        transition: .2s linear;
        pointer-events: none;
    }

    &.active {

        span:nth-child(1){
            transform: translateY(6px) rotate(45deg);
        }
        span:nth-child(2){
            display:none;
        }
        span:nth-child(3){
            transform: translateY(-6px) rotate(-45deg);
        }
    }
`
const Menu = styled.ul`
    position: fixed;
    display: none;
    top: 60px;
    right: 0;
    height: 100vh;
    width: 100vw;
    background-color: ${colors.main};

    &.active {
        ${flex('column', 'flex-start','center')};
    }

    a {
        margin-top: 40px;
        text-decoration: none;
        color: ${colors.secondary};
        font-size: 20px;
    }
`

const Navbar = () => {

    const openHamburger = (e) => {
        document.querySelector('.hamburger').classList.toggle('active')
        document.querySelector('.menu').classList.toggle('active')
    }

    return (
        <Container>
            <ImageContainer href='#home' className='logo-in-nav'>
                <img src={Names} alt="" />
            </ImageContainer>
            <NavLinks>
                <a href="#where">where & when</a>
                <a href="#on-the-day">on the day</a>
                <a href="#accomodation">accomodation</a>
                <a href="#contact">contact</a>
            </NavLinks>
            <Hamburger className='hamburger' onClick={(e) => openHamburger(e)}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu className='menu'>
                <a href="#where" onClick={() => openHamburger()}>where & when</a>
                <a href="#on-the-day" onClick={() => openHamburger()}>on the day</a>
                <a href="#accomodation" onClick={() => openHamburger()}>accomodation</a>
                <a href="#contact" onClick={() => openHamburger()}>contact</a>
            </Menu>
        </Container>
    )
}

export default Navbar