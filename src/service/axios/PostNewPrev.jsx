import axios from 'axios';

const PostNewPrev = ({ setFirstName, setLastName }) => {
  axios
    .post(
      'http://localhost:8000/users/add',
      {
        firstname: 'firstname',
        lastname: 'lastname',
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    .then((response) => {
      console.log(response.data);
      setFirstName();
      setLastName();
    })
    .catch((error) => console.error(error));
};

export default PostNewPrev;
