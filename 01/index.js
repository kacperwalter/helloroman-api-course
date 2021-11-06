const API_URL = 'https://api.punkapi.com/v2/beers';

const success = (data) => {
  console.log(data);
}

const error = (err) => {
  console.log(err);
}

const req = new XMLHttpRequest();