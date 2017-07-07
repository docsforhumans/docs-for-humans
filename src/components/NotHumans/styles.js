import styled from 'styled-components'

export const Styles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 5em;
  svg {
    position: absolute;
    transition-duration: 1s;
  }
  svg:nth-child(1) {
    width: 10em;
    height: 10em;
  }
  svg:nth-child(2) {
    width: 8em;
    height: 8em;
  }
`
