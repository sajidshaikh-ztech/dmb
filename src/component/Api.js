import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const fetchData = async () => {
  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
