import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    display: flex;
    justify-content: ${props => props.justify || 'stretch'};
    align-items:${props => props.align || 'stretch'};
    flex-direction: ${props => props.direction || 'row'};
`

export const Wrapper = (props) => {
  return (
    <StyledWrapper {...props}/>
  )
}
