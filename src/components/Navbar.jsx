//CSS
import styled from 'styled-components'
import { colors, flex } from '../styles/partials'

const Container = styled.nav`
    ${flex('row', 'space-between', 'center')}
    position: fixed;
    top: 0;
    background-color: ${colors.main};
    width: 100%;
    z-index: 10;
    padding: 20px 20px 0 20px;
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
`

const Navbar = () => {

    return (
        <Container>
            <ImageContainer></ImageContainer>
            <NavLinks>
                <a href="">where & when</a>
                <a href="">on the day</a>
                <a href="">accomodation</a>
                <a href="">contact</a>
            </NavLinks>
        </Container>
    )
}

export default Navbar