import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const StyledButton = styled.button.attrs(props => ({
    outline: true,
}))`
    padding: 10px 25px;
    font-size: 21px;
    border: none;
    cursor: pointer;
    align-self: flex-end;
    ${props => props.outline && css`
    border: 1px ${props => props.color || 'white'} solid;
    color: ${props => props.color || 'white'};
    background: transparent;
    ` }
    ${props => props.primary && css`
    border: 1px ${props => props.color || 'white'} solid;
    color: ${props => props.color || 'white'};
    background: ${props => props.background || 'black'};
    ` }

    &:hover {
        animation: ${rotate} 2s infinite linear;
    }
`

const LargeButton = styled(StyledButton)`
    font-size: 32px;
`

export const Button = (props) => {
  return (
    <LargeButton {...props}/>
  )
}
