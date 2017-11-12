import React from 'react'
import { getSiteProps } from 'react-static'
import Flexbox from 'flexbox-react';
//
import helloImg from '../images/hello.png'

export default getSiteProps(() => (
  <Flexbox flexDirection="column" minHeight="100vh" flexWrap="nowrap" justifyContent="flex-start" alignItems="center">
      <h1>Welcome to Michael.Ski</h1>
      <img src={helloImg} alt="hello" />
  </Flexbox>
))
