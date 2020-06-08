import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
    return (
      <div className="header">
        <Link to='/'><span>DEMO Streaming</span></Link>
        <div className="ctrl-buttons">
          <div>Log In</div>
          <div>Start your free trial</div>
        </div>
      </div>        
    )
}