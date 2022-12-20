//CSS
import styled from 'styled-components'
import { colors, flex, fonts } from '../styles/partials'
//react hooks
import { useState } from 'react'
// components
import RSVP from './RSVP'
import Question from './Question'

const Container = styled.section`
    ${flex('column', 'flex-start', 'center')};
    gap: 20px;
    min-height: 100vh;
    width: 100%;
    padding: 20px;
`
const Title = styled.h2`
    font-weight: 400;
    font-size: ${fonts.heading};
    margin-top: 80px;
    color: ${colors.secondary};
`
const ChooseType = styled.fieldset`
    padding: 20px;

    >div {
        ${flex()};
        gap: 20px;

        >div {
            ${flex()};
            gap: 10px;
        }
    }

    legend {
        font-size: ${fonts.subhheading};
        padding: 0px 10px;
    }

    label {
        font-size: ${fonts.paragraph};
    }
`
const ContactFieldset = styled.fieldset`
    padding: 20px;
    width: clamp(300px, 100%, 600px);

    legend {
        font-size: ${fonts.subhheading};
        padding: 0px 10px;
    }

    label {
        font-size: ${fonts.paragraph};
    }
`

const Contact = () => {

    const [typeOfForm, setTypeOfForm] = useState('RSVP')

    const handleForm = (e) => {
        setTypeOfForm(e.target.value)
    }

    return (
        <Container id='contact'>
            <Title>Contact / RSVP</Title>
            <ChooseType>
                <legend>I want to</legend>
                <div>
                    <div>
                        <label htmlFor="rsvp">RSVP</label>
                        <input onChange={(e) => handleForm(e)} type="radio" name="type" id="rsvp" defaultChecked defaultValue={'RSVP'} />
                    </div>
                    <div>
                        <label htmlFor="question">Ask a question</label>
                        <input onChange={(e) => handleForm(e)} type="radio" name="type" id="question" defaultValue={'Question'} />
                    </div>
                </div>
            </ChooseType>
            <ContactFieldset>
                <legend>{typeOfForm}</legend>
                {typeOfForm === 'RSVP' ? <RSVP /> : <Question />}
            </ContactFieldset>
        </Container>
    )
}

export default Contact