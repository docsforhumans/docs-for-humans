import styled from 'styled-components'
import * as theme from 'constants/theme'

export default styled.button`
  display: flex;
  align-items: center;
  width: 7.5em;
  height: 2.5em;
  min-height: 2.5em;
  margin-bottom: 5vw;
  border: 0;
  border-radius: 1.5em;
  background: ${theme.color.neutral};
  color: ${theme.color.pink};
  cursor: pointer;
`
