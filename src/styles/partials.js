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