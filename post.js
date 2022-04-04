function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayPost(data))
}
loadPost();
function displayPost(posts){
    const postContainer = document.getElementById('posts');
    for( const post of posts){
        const div = document.createElement('div');
        // akahne o div a class add akra jai 
        div.classList.add('post');
        div.innerHTML =`
        <h3> ${post.title} </h3>
        <p> ${post.body } </p>
        `;
        postContainer.appendChild(div);
    }


}