import clipboard from 'clipboardy';

async function loadPosts() {
    const res = await fetch('https://www.reddit.com/r/dadjokes.json?limit=800&?sort=top&t=all');
    const json = await res.json();
    return json.data.children;
}
  
async function getJoke() {
    const posts = await loadPosts();
    const { title, selftext } = posts[Math.floor(Math.random() * posts.length)].data;
    let joke = title + " " + selftext;
    return joke;
}

async function sendJoke(joke) {
    clipboard.writeSync(joke)
    console.log(joke);
}
  
getJoke()
.then(async joke => await sendJoke(joke))
.catch(console.error);
