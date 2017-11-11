import React from 'react'
import { getSiteProps } from 'react-static'
import Flexbox from 'flexbox-react';
//
// import {KawaiiPlanet} from 'react-kawaii'

export default getSiteProps(() => (
  <Flexbox flexDirection="column" minHeight="100vh" flexWrap="nowrap" justifyContent="flex-start" alignItems="center">
      <h1>Welcome to Michael.Ski</h1>
      {/*<KawaiiPlanet size={200} mood="blissful" color="#527fbf" text="Hello World!" align="center" />*/}
  </Flexbox>
))
