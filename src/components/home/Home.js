import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>Welcome to the Ashton Library of Computer Science!
    Check out the amazing selection of books in our <Link to='/books'>catalog</Link></div>
  );
}
