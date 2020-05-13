import React from 'react';
import Blog from './Blog';

export default function App() {
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];

  return (
    <Blog posts={posts} />
  ) 
}
