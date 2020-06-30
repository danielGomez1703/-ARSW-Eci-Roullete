/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Roulette from './Roulette';

const handleOnComplete = (value) => {
  console.log(value);
};

const options = [
  "war",
  "pain",
  "words",
  "love",
  "life",
];

ReactDOM.render(<Roulette options={options} baseSize={300} onComplete={handleOnComplete}/>, document.getElementById('root'));

