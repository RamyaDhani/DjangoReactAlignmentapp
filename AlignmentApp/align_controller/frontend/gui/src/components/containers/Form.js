import React, { useState } from 'react';
import axios from 'axios';
import {
    Form, Input, Button,
  } from 'antd';
  const querystring = require('querystring');

  const CustomForm = () => {
    const [sequence, setSequence] = useState("");
    const changeHandler = (e) => {
      setSequence(e.target.value);
    };

    const routeToTicketDetails = () =>{
        console.log({sequence});
        try{
          axios.post("http://127.0.0.1:8000/align/ ",
          querystring.stringify({sequence:sequence}))
          .then(res=>console.log(res));
          window.location.reload();
        }
         catch (e) {
console.log('Error')
}
    } 

        return (
          <div>
            <Form>
              <Form.Item
                label="DNA Sequence"
              >
                <Input type="text" name = "iSequence" placeholder="DNA Sequence"   value={sequence} onChange={changeHandler}
              />
              </Form.Item>
              <Form.Item>
                <Button type="submit" onClick={routeToTicketDetails}>Submit</Button>
              </Form.Item>
            </Form>
          </div>
        );
  };

  export default CustomForm;