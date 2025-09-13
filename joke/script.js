async function getJoke() {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}

// Displays the joke or an error message
function displayJoke(jokeData) {
  const setupEl = document.getElementById('setup');
  const punchlineEl = document.getElementById('punchline');

  if (jokeData) {
    setupEl.textContent = jokeData.setup;
    punchlineEl.textContent = jokeData.punchline;
    setupEl.classList.remove('error');
  } else {
    setupEl.textContent = "Couldn't fetch a joke, try again!";
    punchlineEl.textContent = '';
    setupEl.classList.add('error');
  }
}

// Handles button click and coordinates fetching + displaying
async function handleJoke() {
  const joke = await getJoke();
  displayJoke(joke);
}