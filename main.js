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
  
getJoke()
.then(joke => {
    clipboard.writeSync(joke)
    console.log(joke);
})
.catch(console.error);
