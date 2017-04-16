const numbers = [4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12,
                 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12,
                 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12];

const stepDeg = 360 / numbers.length;

var currentPosition = 0;
var prevTransform = 0;

export const animation = (number, rounds = 5) => {
  if (numbers.indexOf(number) === -1) {
    throw new Error('Числа нет на панели');
  }

  let targetPosition = currentPosition + 1;
  for (let i of numbers) {
    if (numbers[targetPosition] == number) {
      break;
    }

    targetPosition = (targetPosition + 1) % numbers.length;
  }

  let difference = 0;
  for (let i of numbers) {
    if (numbers[difference] == number) {
      break;
    }

    difference = (difference + targetPosition + 1) % numbers.length;
  }

  currentPosition = targetPosition;

  let transform = difference ? 360 * rounds + difference * stepDeg : rounds;

  let prevTransformDiff = prevTransform % 360;

  console.log(prevTransformDiff);

  if (transform >= prevTransformDiff) {
    transform += (prevTransform - prevTransformDiff);
  } else {
    transform += (prevTransform + (360 - prevTransformDiff));
  }

  console.log(numbers[currentPosition], transform, prevTransform);

  prevTransform = transform;

  return transform;
};
