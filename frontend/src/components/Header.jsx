import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <Link to="/">
        <h1>Hope Album</h1>
        </Link>
    </div>
  )
}
