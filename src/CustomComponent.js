import React from 'react'

//Create a custom component that accepts a list as its prop
//input: ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
//renders: items of the array
export const CustomComponent = ({list}) => {
  return (
    <div>
      {list.map((item, index)=> (
      <div key={index}>{item}</div>))}
    </div>
  )
}
