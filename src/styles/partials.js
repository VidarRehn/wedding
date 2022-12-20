import {css} from "styled-components";

export const colors = {
    main: '#F6F1EB',
    secondary: '#897057',
    green: '#7CB683',
}

export const flex = (direction, justify, align) => css`
    display: flex;
    flex-direction: ${direction || 'row'};
    justify-content: ${justify || 'flex-start'};
    align-items: ${align || 'flex-start'};
`

export const fonts = {
    heading: 'clamp(16px, 2em, 40px)',
    subhheading: 'clamp(14px, 1.8em, 34px)',
    paragraph: 'clamp(10px, 1.2em, 20px)',
}