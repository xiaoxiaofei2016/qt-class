import React, { Component } from 'react';
import ShowArea from './showArea';
import Buttons from './Buttons';
import { Color } from './color'

function Example() {
  return (
    <div>
      <Color>
        <ShowArea/>
        <Buttons/>
      </Color>
    </div>
  )
}

export default Example