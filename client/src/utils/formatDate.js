import moment from 'moment';

const formatDate = (unformattedDate) => {
  return moment(unformattedDate).format("DD.MM.YYYY HH:mm:SS");
}

export default formatDate;
