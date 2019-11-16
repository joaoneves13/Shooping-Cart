// Information about Darth Vader
function darthVader() {
  fetch("https://swapi.co/api/people/4/")
  .then(response => response.json())
  .then(myJson => {
    const second = document.getElementById('first')
   second.innerHTML = "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
  })
}

// Information about Luke Skywalker

function lukeSky() {
fetch("https://swapi.co/api/people/1/") 
.then(response => response.json()) 
.then(myJson => { 
  const advise = document.getElementById('lukeSky')
  advise.innerHTML = "<pre>" + JSON.stringify(myJson, null, " ") + "</pre>"
})
}

lukeSky()


