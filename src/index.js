import _ from 'underscore';
import './style.css';
import Eila from './eila_piano.jpg';


function component() {
  const element = document.createElement('div');

  const greetingParts = ['Hello', 'webpack']
  element.innerHTML = greetingParts.join(' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = Eila;

  element.appendChild(myIcon);

  _.each(greetingParts, (part) => {
    console.log(part);
  });

  return element;
}

document.body.appendChild(component());