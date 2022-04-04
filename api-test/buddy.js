//buddies
 const loadBuddies = () =>{
     fetch('https://randomuser.me/api/?results=5')
     .then(response => response.json())
     .then(data => displayBuddies(data))

 }
 loadBuddies(); 
 const displayBuddies = (data) =>{
     const buddies = data.results;
     const buddiesDiv = document.getElementById('buddies');
     
     for( const buddy of buddies){
         //console.log(buddy.email)
         const p = document.createElement('p');
         p.innerText = ` Name: ${buddy.name.first} ${buddy.name.last} Email: ${buddy.email}`;
         p.style.backgroundColor= 'gray'
         buddiesDiv.appendChild(p)

          
     }
 }