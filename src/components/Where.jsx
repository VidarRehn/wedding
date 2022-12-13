//CSS
import styled from 'styled-components'
import { colors, flex } from '../styles/partials'

const Container = styled.section`
    ${flex('column', 'flex-start', 'center')};
    gap: 20px;
    min-height: 100vh;
`
const Title = styled.h2`
    font-weight: 400;
    font-size: clamp(16px, 2em, 40px);
    margin-top: 80px;
    color: ${colors.secondary};
`
const InnerContainer = styled.div`
    ${flex()};
`
const MapContainer = styled.div`
    height: 60vh;
    max-width: 500px;
    width: 100vw;
    background-color: #cecece;
`
const TextContainer = styled.div`
    height: 60vh;
    max-width: 500px;
    width: 100vw;
    outline: 1px solid red;
`

const Where = () => {

    return (
        <Container id='where'>
            <Title>Where & when</Title>
            <InnerContainer>
                <MapContainer></MapContainer>
                <TextContainer></TextContainer>
            </InnerContainer>

        </Container>
    )
}

export default Where