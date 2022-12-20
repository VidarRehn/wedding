//CSS
import styled from 'styled-components'
import { colors, flex, fonts } from '../styles/partials'
//resources
import Venue from '../resources/Officersmassen.jpg'

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
const ImageContainer = styled.div`
    height: 60vh;
    width: 100%;
    background-color: #cecece;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const TextContainer = styled.div`
    height: 60vh;
    width: 100%;
    padding: 20px;

    h3 {
        font-weight: 400;
        font-size: ${fonts.subhheading};
    }

    a {
        font-size: ${fonts.paragraph}; 
    }
`

const Where = () => {

    return (
        <Container id='where'>
            <Title>Where & when</Title>
            <InnerContainer>
                <ImageContainer>
                    <img src={Venue} alt="" />
                </ImageContainer>
                <TextContainer>
                    <h3>Officersmässen, Älvkarleby</h3>
                    <a href="https://www.officersmassen.com/">Go to website</a>
                    <h3>Älvkarleby kyrka</h3>
                    <a href="https://www.svenskakyrkan.se/platser/7406-alvkarleby-skutskars-forsamling-alvkarleby-kyrka">Go to website</a>
                </TextContainer>
            </InnerContainer>

        </Container>
    )
}

export default Where
