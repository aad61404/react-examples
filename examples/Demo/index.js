import React from 'react'
import ReactDOM from 'react-dom'
import { a , b, c} from './abc.jsx'
import  Demo  from './Demo.jsx'
console.log('a' , a)
console.log('b' , b)
console.log('c' , c)
// main.jsx

ReactDOM.render(<Demo/>, document.getElementById('root'));

