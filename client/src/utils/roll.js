var probability = {};

var numbers = [4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 11, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12];

var currentPosition = 0;
var stepDeg = 360 / numbers.length;
var prevTransform = 0;

const roll = () => {
  $('.btn-block').prop("disabled", true);
  probability.Lot = new Array (

    [0, 'green', 'green'],
    [11, 'black', 'purple'],
    [5, 'red', 'purple'],
    [10, 'black', 'blue'],
    [6, 'red', 'blue'],
    [9, 'black', 'purple'],
    [7, 'red', 'purple'],
    [8, 'black', 'blue'],
    [1, 'red', 'purple'],
    [14, 'black', 'blue'],
    [2, 'red', 'blue'],
    [13, 'black', 'purple'],
    [3, 'red', 'purple'],
    [12, 'black', 'blue'],
    [4, 'red', 'blue']

  );
  probability.Arr =[];
  //Вероятности выпадения;
  probability.green	= 20; //Вероятность красного
  probability.red	= 40; //Вероятность зеленого
  probability.black	= 40; //Вероятность синего

  for(let i = 0; i < probability.Lot.length; i++) {
    probability_rationing(probability.Lot[i][1], [probability.Lot[i], i]);
  }

  const out = probability.Arr[Peremeshivalka(probability.Arr.length)][0];
  const parity  = out[2];
  const number  = out[0];
  const sector = out[1];

  console.log(number, parity, sector);

  animation(number, 3);
};

const animation = (number, rounds = 1) => {
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

  // if (transform >= prevTransformDiff) {
  //   transform += (prevTransform - prevTransformDiff);
  // } else {
    transform += (prevTransform + (360 - prevTransformDiff));
  // }

  console.log(numbers[currentPosition], transform, prevTransform);

  prevTransform = transform;

  $('#wheel').css('transform', `rotate(${-transform}deg)`);
}

const Peremeshivalka = (lng) => {
  let a = {};
  let i;
  let out = [];
  let n = 0;

  for(i = 0; i < lng; i++)
  a[i] = i;

  while (n != lng) {
    i = Math.floor( lng * Math.random() );

    if(typeof(a[i]) != 'undefined') {
      out.push(a[i]);
      delete a[i];

      n++;
    }
  }

  return out[Math.floor( lng * Math.random() )];
};

const probability_rationing = (y, x) => {
  for(let j = 0; j < probability[y]; j++) {
    probability.Arr.push(x);
  }
};

export {
  roll
};
