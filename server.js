// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server that just says "Hi!!" at every route
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      '<h1>Home</h1>' +
      '<img src="https://media.giphy.com/media/mW05nwEyXLP0Y/giphy.gif" alt="Whale hello there">' +
      '<ul><li><a href="/cuteness">Something Cute</a></li>' +
      '<li><a href="/knock-knock">Something Funny</a></li></ul>'
    )
  } else if (request.url === '/cuteness') {
    response.end(
      '<h1>Cuteness</h1>' +
      '<div><img src="http://drive.google.com/uc?export=view&id=1dn745CvhP6-zJ6x8-XjcTjiQjtsz3JH0Dg" alt="MacGyver sleeping on a rainbow blanket" height="500"></div>' +
      '<a href="/">Home</a>'
    )
  } else if (request.url === '/knock-knock') {
    var randomNumber = Math.random()
    var randomJoke = ''
    if (randomNumber > 0.7) {
      randomJoke = { setup: 'Cozy', punchline: 'Cozy who\'s knocking please.' }
    } else if (randomNumber > 0.3) {
      randomJoke = { setup: 'Madam', punchline: 'Ma dam hand hurts from all that knocking!' }
    } else {
      randomJoke = { setup: 'With', punchline: 'With whom.' }
    }
    response.end(
      '<h1>Wanna hear a joke?</h1>' +
      '<p><strong>Knock knock.</strong></p>' +
      '<p>Who\'s there?</p>' +
      '<p><strong>' + randomJoke.setup + '.</strong></p>' +
      '<p>' + randomJoke.setup + ' who?</p>' +
      '<p><strong>' + randomJoke.punchline + '</strong></p>' +
      '<a href="/">Home</a>'
    )
  } else {
    response.end(
      '<h1>404: Page Not Found</h1>' +
      '<p>Sorry, we couldn\'t find <code>' + request.url + '</code>.</p>' +
      '<a href="/">Home</a>'
    )
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
