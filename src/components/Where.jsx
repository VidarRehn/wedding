//CSS
import styled from 'styled-components'
import { colors, flex } from '../styles/partials'

const Container = styled.section`
    ${flex('column', 'flex-start', 'center')};
    gap: 20px;
    min-height: 100vh;
    width: 100%;
`
const Title = styled.h2`
    font-weight: 400;
    font-size: clamp(16px, 2em, 40px);
    margin-top: 80px;
    color: ${colors.secondary};
`
const InnerContainer = styled.div`
    ${flex()};
    width: 100%;

    @media (min-width: 600px) {
      ${flex('column')};
    }
`
const MapContainer = styled.div`
    height: 60vh;
    width: 100%;
    background-color: #cecece;
`
const TextContainer = styled.div`
    height: 60vh;
    width: 100%;
    background: #bb8dbb;
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
