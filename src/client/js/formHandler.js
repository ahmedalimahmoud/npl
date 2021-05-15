function handleSubmit(event) {
  event.preventDefault()

  // check what text was put into the form field
  let formText = document.getElementById('text').value;
  let agreement = document.getElementById('agreement');
  let confidence = document.getElementById('confidence');
  let irony = document.getElementById('irony');
  let score_tag = document.getElementById('score_tag');
  let subjectivity = document.getElementById('subjectivity');

  fetch('http://localhost:8081/result', {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "text": formText
      }),
    })
    .then(res => {
      return res.json()
    })
    .then(function (data) {
      agreement.innerHTML = 'Agreement : ' + data.agreement;
      confidence.innerHTML = 'Confidence : ' + data.confidence;
      irony.innerHTML = 'Irony : ' + data.irony;
      score_tag.innerHTML = 'Score Tag : ' + data.score_tag;
      subjectivity.innerHTML = 'Subjectivity : ' + data.subjectivity;
    })


}

export {
  handleSubmit
}