import React from 'react';
import ReactDom from 'react-dom';
import Logo from './components/Logo';
import Header from './components/Header';
import Tresci from './components/Tresci';

ReactDom.render(
    <div>
       <Logo />
       <Header />
       <Tresci />
    </div>
    ,document.getElementById('app')
);


