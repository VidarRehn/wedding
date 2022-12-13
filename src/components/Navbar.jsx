//CSS
import styled from 'styled-components'
import { colors, flex } from '../styles/partials'

const Container = styled.nav`
    ${flex('row', 'flex-end', 'center')}
    position: fixed;
    top: 0;
    background-color: ${colors.main};
    width: 100%;
    z-index: 10;
    padding: 20px;
`
const ImageContainer = styled.div`
    height: 80px;
    width: 80px;
    background-color: ${colors.secondary};
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
        margin-top: 30px;
        text-decoration: none;
        color: ${colors.secondary};
        font-size: 20px;
    }
`

const Navbar = () => {

    const openHamburger = (e) => {
        e.target.classList.toggle('active')
        document.querySelector('.menu').classList.toggle('active')
    }

    return (
        <Container>
            {/* <ImageContainer></ImageContainer> */}
            <NavLinks>
                <a href="#where">where & when</a>
                <a href="#on-the-day">on the day</a>
                <a href="#accomodation">accomodation</a>
                <a href="">contact</a>
            </NavLinks>
            <Hamburger onClick={(e) => openHamburger(e)}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu className='menu'>
                <a href="">where & when</a>
                <a href="">on the day</a>
                <a href="">accomodation</a>
                <a href="">contact</a>
            </Menu>
        </Container>
    )
}

export default Navbar