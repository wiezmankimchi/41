import React from 'react'
import styled from 'styled-components'

import Login from './Login'

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 100vh;
  padding: 1rem;
  width: 100vw;
`
const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
  width: 90vw;
`

const Content = styled.div`
  flex: 1;
  margin-right: 1rem;
`

const Sidebar = styled.div`
  flex: 0 auto;
  width: 10vw;
`

export default function Root () {
  return (
    <Wrapper>
      <Container>
        <Content>Content</Content>
        <Sidebar>
          <Login />
        </Sidebar>
      </Container>
    </Wrapper>
  )
}
