//CSS
import styled from 'styled-components'
import { colors, flex } from '../styles/partials'
//resources


const Container = styled.header`
    padding: 0px 20px;
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 160px;
	grid-auto-flow: dense; 

    .horizontal {
	    grid-column: span 2;
    }

    .vertical {
        grid-row: span 2;
    }

    .big {
        grid-column: span 2;
        grid-row: span 2;
    }
`
const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Gallery = () => {

    return (
        <Container>
            <ImageContainer classNameName="horizontal">
                <img src="https://picsum.photos/500/200" alt="" />
            </ImageContainer>
            <ImageContainer className="vertical">
                <img  src="https://picsum.photos/200/350" alt="" />
            </ImageContainer>
            <ImageContainer>
                <img src="https://picsum.photos/200/200" alt="" />
            </ImageContainer>
            <ImageContainer className="big">
                <img   src="https://picsum.photos/600/600" alt="" />
            </ImageContainer>
            <ImageContainer className="vertical">
                <img  src="https://picsum.photos/250/400" alt="" />
            </ImageContainer>
            <ImageContainer className="horizontal">
                <img  src="https://picsum.photos/400/150" alt="" />
            </ImageContainer>
            <ImageContainer>
                <img src="https://picsum.photos/200/220" alt="" />
            </ImageContainer>
            <ImageContainer className="horizontal">
                <img  src="https://picsum.photos/450/200" alt="" />
            </ImageContainer>
            <ImageContainer>
                <img src="https://picsum.photos/220/250" alt="" />
            </ImageContainer>
            <ImageContainer>
                <img src="https://picsum.photos/250/200" alt="" />
            </ImageContainer>
            <ImageContainer className="certical">
                <img  src="https://picsum.photos/450/200" alt="" />
            </ImageContainer>
        </Container>
    )
}

export default Gallery