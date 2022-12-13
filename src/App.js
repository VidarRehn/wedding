//CSS
import styled from 'styled-components'
import { colors, flex } from './styles/partials'
//resources
import Flowers from './resources/flowers.png'
//react hooks
import { useState, useEffect } from 'react'
//components
import Navbar from './components/Navbar'
import Header from './components/Header'
import Gallery from './components/Gallery'

const Wrapper = styled.div`
  ${flex('column', 'center', 'center')};
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.main};
`
const ImageContainer = styled.div`
  ${flex('column', 'flex-end', 'center')}
  position: sticky;
  bottom: 0;
  width: 100%;
  overflow: hidden;

  img {
    max-height: 100%;
    max-width: 100%;

    @media (max-width: 400px) {
      max-width: 300%;
    }

    /* @media (max-width: 600px) {
      max-width: 250%;
    }

    @media (max-width: 800px) {
      max-width: 200%;
    }

    @media (max-width: 1000px) {
      max-width: 150%;
    } */

  }
`

function App() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  useEffect(() => {
    if (100 > scrollPosition > 0) {
      let flowers = document.querySelector('.flowers')
      flowers.style.bottom = `-${scrollPosition}px`
    }
  }, [scrollPosition])

  return (
    <>
    <Wrapper>
      <Navbar />
      <Header />
      <Gallery />

      <ImageContainer className='flowers'>
        <img src={Flowers} />
      </ImageContainer>
    </Wrapper>
    </>
  );
}

export default App;
