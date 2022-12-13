//CSS
import styled from 'styled-components'
import { colors, flex } from '../styles/partials'
//resources
import One from '../resources/1.JPG'
import Two from '../resources/2.JPG'
import Three from '../resources/3.JPG'
import Four from '../resources/4.JPG'
import Five from '../resources/5.JPG'
import Six from '../resources/6.JPG'
import Seven from '../resources/7.JPG'
import Eight from '../resources/8.JPG'
import Nine from '../resources/9.JPG'
import Ten from '../resources/10.JPG'
import Eleven from '../resources/11.JPG'
import Twelve from '../resources/12.JPG'
import Thirteen from '../resources/13.JPG'
import Fourteen from '../resources/14.JPG'
import Fifteen from '../resources/15.JPG'
import Sixteen from '../resources/16.JPG'
import Seventeen from '../resources/17.JPG'
import Eighteen from '../resources/18.JPG'
import Nineteen from '../resources/19.JPG'
import Twenty from '../resources/20.JPG'
import TwentyOne from '../resources/21.JPG'
import TwentyTwo from '../resources/22.JPG'
import TwentyThree from '../resources/23.JPG'


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
                <img src={One} alt="" />
            </ImageContainer>
            <ImageContainer className="vertical">
                <img  src={Two} alt="" />
            </ImageContainer>
            <ImageContainer>
                <img src={Three} alt="" />
            </ImageContainer>
            <ImageContainer className="big">
                <img   src={Four} alt="" />
            </ImageContainer>
            <ImageContainer className="vertical">
                <img  src={Five} alt="" />
            </ImageContainer>
            <ImageContainer>
                <img  src={Six} alt="" />
            </ImageContainer>
            <ImageContainer>
                <img src={Seven} alt="" />
            </ImageContainer>
            <ImageContainer  className='big'>
                <img  src={Eight} alt="" />
            </ImageContainer>
            <ImageContainer>
                <img src={Nine} alt="" />
            </ImageContainer>
            <ImageContainer className='vertical'>
                <img src={Ten} alt="" />
            </ImageContainer>
            <ImageContainer className="vertical">
                <img  src={Eleven} alt="" />
            </ImageContainer>
            <ImageContainer className="horizontal">
                <img  src={Twelve} alt="" />
            </ImageContainer>
            <ImageContainer>
                <img src={Thirteen} alt="" />
            </ImageContainer>
            <ImageContainer>
                <img  src={Fourteen} alt="" />
            </ImageContainer>
            <ImageContainer>
                <img src={Fifteen} alt="" />
            </ImageContainer>
            <ImageContainer className='big'>
                <img src={Sixteen} alt="" />
            </ImageContainer>
            <ImageContainer>
                <img  src={Seventeen} alt="" />
            </ImageContainer>
            <ImageContainer className="horizontal">
                <img  src={Eighteen} alt="" />
            </ImageContainer>
            <ImageContainer className='vertical'>
                <img src={Nineteen} alt="" />
            </ImageContainer>
            <ImageContainer>
                <img src={Twenty} alt="" />
            </ImageContainer>
            <ImageContainer className="vertical">
                <img  src={TwentyOne} alt="" />
            </ImageContainer>
            <ImageContainer className='vertical'>
                <img src={TwentyTwo} alt="" />
            </ImageContainer>
            <ImageContainer className="vertical">
                <img  src={TwentyThree} alt="" />
            </ImageContainer>
        </Container>
    )
}

export default Gallery