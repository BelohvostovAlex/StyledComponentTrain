import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
    color: ${props => props.color || 'white'};
    font-size: 42px;
    margin: 10px 0px;
`

export const Title = (props) => {
  return (
    <StyledTitle {...props}/>
  )
}
