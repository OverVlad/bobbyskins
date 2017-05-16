import store from '../store';
import { finishRoll } from '../actions/rouletteActions';
import socket from './socket';

const numbers = [4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12];

const stepDeg = 360 / numbers.length;

var currentPosition = 0;

function getDifference(number, targetPosition, difference = 0) {
  if (numbers[difference] == number) difference = (difference + targetPosition + 1) % numbers.length;

  for (let i of numbers) {
    if (numbers[difference] == number) {
      break;
    }

    difference = (difference + 1) % numbers.length;
  }

  return difference;
}

export const rolling = (number, prevTransform, rounds = 5) => {
  let targetPosition = currentPosition + 1;
  for (let i of numbers) {
    if (numbers[targetPosition] == number) {
      break;
    }

    targetPosition = (targetPosition + 1) % numbers.length;
  }

  let difference = getDifference(number, targetPosition);

  currentPosition = targetPosition;

  let transform = difference !== 0 ? 360 * rounds + difference * stepDeg : rounds;

  let prevTransformDiff = prevTransform % 360;

  if (transform >= prevTransformDiff) {
    transform += (prevTransform - prevTransformDiff);
  } else {
    transform += (prevTransform + (360 - prevTransformDiff));
  }

  prevTransform = transform;

  $('#wheel').css('transform', `rotate(${-transform}deg)`);

  setTimeout(() => {
    store.dispatch(finishRoll());
    socket.emit('history rolls');
    socket.emit('change transform', transform);
  }, 7000)
};
