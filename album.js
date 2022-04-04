function albumFuntion(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(data => albumDisplay(data))
    //album-post
}
albumFuntion()

function albumDisplay(posts){
    const postDisplay = document.getElementById('album-post');
    for(const post of posts){
        const p = document.createElement('p');
        p.classList.add('jspost');
        p.innerHTML = `
        <h3> ${post.title} </h3>
        <p> ${post.id } </p>
        
        
        `;
        postDisplay.appendChild(p);
    }


}