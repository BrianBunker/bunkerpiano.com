
import './style.css';

import eilaPortraitPhoto from './eila_piano.jpg';


function component() {
  const element = document.createElement('div');

  // Add the image to our existing div.
  const eilaImage = new Image();

  const picEl = element.appendChild(eilaImage);
  picEl.classList.add('heroPic');
  picEl.style.backgroundImage = 'url("./' + eilaPortraitPhoto + '")';
  console.log(eilaPortraitPhoto)

  return element;
}

document.body.appendChild(component());