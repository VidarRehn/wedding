//CSS
import styled from 'styled-components'
import { colors, flex } from '../styles/partials'
//resources
import Names from '../resources/names.png'
import Animation from '../resources/name-animation.gif'
//react hooks
import { useEffect, useState } from 'react'

const Container = styled.header`
    ${flex('column', 'flex-start', 'center')};
    gap: 20px;
    min-height: 100vh;
`
const ImageContainer = styled.div`
    max-width: 600px;
    margin-top: 100px;
    pointer-events: none;

  img {
    max-height: 100%;
    max-width: 100%;
    transform: rotate(1deg);
  }
`
const Text = styled.h2`
    font-weight: 400;
    font-size: clamp(16px, 2em, 40px);
    color: ${colors.secondary};
`
const Button = styled.button`
    border: none;
    background-color: ${colors.green};
    color: white;
    padding: 10px 40px;
`

const Header = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2600);
    })

    return (
        <Container id='home'>
            <ImageContainer>
                <img src={loading ? Animation : Names} />
            </ImageContainer>
            <Text>5 august 2023, Älvkarleby</Text>
            <Button>RSVP</Button>
        </Container>
    )
}

export default Header