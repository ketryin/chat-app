import axios from "axios";

function getAnswer() {
  return axios
    .get(`https://api.chucknorris.io/jokes/random`)
    .then((response) => response.data.value);
}

export { getAnswer };
