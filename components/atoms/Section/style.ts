import { css, keyframes } from '@emotion/react'

export const style = css`
  position: relative;
  flex-direction: column;
  margin: 1rem;
  background-color: #dcd8c0;
  padding: 0.5rem;
  padding-left: 1.5rem;
  box-shadow: 0.2em 0.2em #bab5a1;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 0.3rem;
    padding: 0.15rem;
    border: solid #454138;
    border-width: 0 0.2rem 0 0.6rem;
  }
  &:hover:before {
    border: solid #bab5a1;
    border-width: 0 0.2rem 0 0.6rem;
  }
`
