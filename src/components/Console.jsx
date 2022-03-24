import React from 'react'
import styled from 'styled-components'
import { Flex } from './Flex'
import { Line } from './Line'

const StyledConsole = styled.textarea`
    width: 100%;
    height: 70vh;
    background: black;
    font-size: 24px;
    border: none;
    resize: none;
    color: ${props => props.color || props.theme.colors.secondary};

    &:focus {
        outline: none;
    }

    @media ${props => props.theme.media.phone} {
      color: yellow;
    }
    @media ${props => props.theme.media.tablet} {
      color: blue;
    }
`

export const Console = ({color, ...props}) => {
  const [lines, setLines] = React.useState(['d:/styled-components/'])
  const onKeyPress = (e) => {
    if(e.charCode === 13) {
      setLines([...lines, 'd:/styled-components/'])
    }
  }
  return (
    <Flex>
      <Flex direction="column">
        {lines.map((line,i) => <Line color={color} key={i}>{line}</Line>)}
      </Flex>
      <StyledConsole color={color} {...props} onKeyPress={onKeyPress}/>
    </Flex>
  )
}
