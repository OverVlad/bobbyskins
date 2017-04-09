import { roll } from './roll'

const progressBar = (timeleft, timetotal) => {
  $('.btn-block').prop("disabled", false);
  const $elem = $('#progress-bar');
  let progressBarWidth = timeleft * 100 / timetotal;
  $elem.find('div').width(progressBarWidth + '%');
  $('#timer').html( timeleft );
  if(timeleft > 0.00) {
    setTimeout(() => {
      progressBar((timeleft - 0.01).toFixed(2), timetotal);
    }, 10);
  }
  if(timeleft <= 0.00) {
    $('.banner').html('Rolling!');
      roll();
  }
}

export {
  progressBar
};
