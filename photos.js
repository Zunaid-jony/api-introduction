function photoGellery(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => photoPass(data))
}
//function photoCall();
function photoPass(data){
    const photoVule = document.getElementById('gellery')
   for(const post of data){
    const p = document.createElement('p')
    p.innerHTML=`
    <h3> ${post.title} </h3>
        <p> ${post.id } </p>
        
    `;
   }
    photoVule.appendChild(p);
    
}
