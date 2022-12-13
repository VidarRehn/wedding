//CSS
import styled from 'styled-components'
import { colors, flex } from '../styles/partials'
//resources
import Names from '../resources/names.png'

const Container = styled.header`
    ${flex('column', 'flex-start', 'center')};
    gap: 20px;
    min-height: 100vh;
`
const ImageContainer = styled.div`
    max-width: 600px;
    margin-top: 20%;

  img {
    max-height: 100%;
    max-width: 100%;
    transform: rotate(1deg);
  }
`
const Text = styled.h2`
    font-weight: 400;
    font-size: clamp(20px, 2em, 40px);
    color: ${colors.secondary};
`
const Button = styled.button`
    border: none;
    background-color: ${colors.green};
    color: white;
    padding: 10px 40px;
`

const Header = () => {

    return (
        <Container>
            <ImageContainer>
                <img src={Names} />
            </ImageContainer>
            <Text>5 august 2023, Älvkarleby</Text>
            <Button>RSVP</Button>
        </Container>
    )
}

export default Header