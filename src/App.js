import React from 'react'
import './App.css';
import {CustomComponent} from './CustomComponent';

export const App = () => {

  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

  return (
    <div>
      <CustomComponent list={animals}/>
    </div>
  )
}
