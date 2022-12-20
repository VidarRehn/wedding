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
const Question = () => {

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
                <label htmlFor="">Question</label>
                <textarea name="" id="" cols="30" rows="5"></textarea>
            </InputAndLabel>
            <SubmitButton>Submit</SubmitButton>
        </Form>
    )
}

export default Question