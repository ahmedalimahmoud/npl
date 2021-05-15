var FormData = require('form-data');
const fetch = require("node-fetch");

function getResult(req, res) {  
    const formdata = new FormData();
    formdata.append("key",process.env.API_KEY );
    formdata.append("txt", req.body.text);
    formdata.append("lang", "en");  // 2-letter code, like en es fr ...
  
    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
  
    fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
      .then(res => {
        return res.json()
      })
      .then(function (data) {
            res.json(data);

      })
      .catch(error => console.log('error', error));
    
}

exports.getResult = getResult;
