import React from 'react'
import styled from 'styled-components'
import { Link } from './Link'
import Logo from './Logo'
import { theme } from '../theme'

const Avatar = styled.img`
  border-radius: 50%;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.125);
  height: 12rem;
  width: 12rem;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Inner = styled.nav``
const Item = styled(Link)`
  margin: 1rem 1.5rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${theme.colors.white};
  position: relative;
  display: inline-block;
  cursor: pointer;
`

export default () => (
  <Wrapper role="navigation">
    <Logo size={64} linked />
    <Inner>
      <Item to="/hi">Hi</Item>
      <Item to="/hi">Hi</Item>
    </Inner>
  </Wrapper>
)
