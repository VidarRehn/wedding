//CSS
import styled, { css } from 'styled-components'
import { colors, flex, fonts } from '../styles/partials'
// react hooks
import { useState } from 'react'

const Form = styled.form`
    width: 100%;
    font-size: ${fonts.paragraph};
    ${flex('column')};
    gap: 20px;
`
const InputAndLabel = styled.div`
    width: 100%;
    gap: 10px;

    input[type='text'],input[type='email'], textarea {
        width: 100%;
    }

    input, textarea {
        padding: 5px;
    }

    ${props => props.row && css`
        ${flex('row', 'flex-start', 'center')}
    `}
    ${props => props.column && css`
        ${flex('column')}
    `}
`
const SubmitButton = styled.button` 
    align-self: center;
    width: 280px;
    padding: 10px;
    background-color: ${colors.secondary};
    color: white;
    border: none;
`

const RSVP = () => {

    const [attending, setAttending] = useState('yes')
    const [twoPeople, setTwoPeople] = useState(false)

    const handleAttendance = (e) => {
        setAttending(e.target.value)
    }

    const handlePersons = (e) => {
        setTwoPeople(!twoPeople)
    }

    return (
        <Form>
            <InputAndLabel column>
                <label htmlFor="">Name *</label>
                <input type="text" name="" id="" />
            </InputAndLabel>
            <InputAndLabel column>
                <label htmlFor="">E-mail *</label>
                <input type="email" name="" id="" />
            </InputAndLabel>
            <InputAndLabel column>
                <label>Will you be attending? *</label>
                <InputAndLabel row>
                    <label htmlFor="attending">Yes</label>
                    <input onChange={(e) => handleAttendance(e)} type="radio" name="attending" id="attending" defaultChecked defaultValue={'yes'} />
                </InputAndLabel>
                <InputAndLabel row>
                    <label htmlFor="not-attending">No</label>
                    <input onChange={(e) => handleAttendance(e)} type="radio" name="attending" id="not-attending" defaultValue={'no'} />
                </InputAndLabel>
            </InputAndLabel>
            {attending === 'yes' && (
                <InputAndLabel row>
                    <label htmlFor="how-many">How many people</label>
                    <select onChange={(e) => handlePersons(e)} name="how-many" id="how-many" defaultValue={1}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                    </select>
                </InputAndLabel>
            )}
            {twoPeople && (
                <InputAndLabel column>
                    <label htmlFor="">Name second person *</label>
                    <input type="text" name="" id="" />
                </InputAndLabel>
            )}
            <InputAndLabel column>
                <label htmlFor="">Message</label>
                <textarea name="" id="" cols="30" rows="5"></textarea>
            </InputAndLabel>

            <SubmitButton>Submit</SubmitButton>
        </Form>
    )
}

export default RSVP