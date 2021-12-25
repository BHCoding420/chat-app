import { useState } from 'react';
import axios from 'axios';

const projectID = 'c293b89d-a099-49a2-b475-2969904f3c6a';

const SignUpForm = () => {


    const [data, setData] = useState({
        username: '',
        first_name: '',
        last_name: '',
        secret: '',

    });

  const handleSubmit = async (e) => {
      e.preventDefault();
      var myHeaders = new Headers();
    myHeaders.append("PRIVATE-KEY", '12414213-a71f-4f2d-a0b9-04af48cc190a');
    const headers = {
        'PRIVATE-KEY' : '12414213-a71f-4f2d-a0b9-04af48cc190a'
    }

    //var raw = "{\n    \"username\": \"adam_la_morre\",\n    \"first_name\": \"Adam\",\n    \"last_name\": \"La Morre\",\n    \"secret\": \"pass1234\",\n    \"custom_json\": {\"high_score\": 2000}\n}";

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: 'follow'
    };

    await axios.post("https://api.chatengine.io/users/",data,{
        headers: headers
    }).then(response => {console.log(response)})
    .catch(error =>{console.log(error)})

    window.location.reload('/')
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>

          <input type="text" name="first_name" value={data.first_name} onChange={(e) => setData( {...data,[e.target.name]:e.target.value} )} className="input" placeholder="First Name" required />
          <input type="text" name="last_name" value={data.last_name} onChange={(e) => setData( {...data,[e.target.name]:e.target.value} )} className="input" placeholder="Last Name" required />
          <input type="text" name="username" value={data.username} onChange={(e) => setData( {...data,[e.target.name]:e.target.value} )} className="input" placeholder="Username" required />
          <input type="password" name="secret" value={data.secret} onChange={(e) => setData( {...data,[e.target.name]:e.target.value} )} className="input" placeholder="Password" required />

          <div align="center">
            <button type="submit" className="button">
              <span>Sign UP</span>
            </button>
          </div>
        </form>

      </div>
    </div>

  );
};

export default SignUpForm;
