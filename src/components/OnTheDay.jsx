//CSS
import styled from 'styled-components'
import { colors, flex, fonts } from '../styles/partials'

const Container = styled.section`
    ${flex('column', 'flex-start', 'center')};
    gap: 20px;
    min-height: 100vh;
    width: 100%;
`
const Title = styled.h2`
    font-weight: 400;
    font-size: ${fonts.heading};
    margin-top: 80px;
    color: ${colors.secondary};
`
const InnerContainer = styled.div`
    ${flex('column')};
    width: 100%;

    @media (min-width: 600px) {
      ${flex()};
    }
`
const TextContainer = styled.div`
    height: 60vh;
    width: 100%;
    background: #d6b9be;
`

const OnTheDay = () => {

    return (
        <Container id='on-the-day'>
            <Title>On the day</Title>
            <InnerContainer>
                <TextContainer></TextContainer>
            </InnerContainer>
        </Container>
    )
}

export default OnTheDay