var probability = {};

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

  const N = probability.Lot.length * 3; //Число секторов
  const stRad = 360/N;	//!!!Целое число градусов!!!;
  console.log('stRad', stRad);
  const delta_random = -14 + 28 * Math.random();
  const itogCorner = 6982 + Math.floor(delta_random) - stRad * number;
  console.log('itogCorner', itogCorner);

  $('#wheel').css('transform', `rotate(${itogCorner}deg)`);
};

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
