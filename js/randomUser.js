const randomUser=()=>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res=>res.json())
    .then(data=>displayRandomUser(data))
}

const displayRandomUser=(user)=>{
    const gender=document.getElementById('gender')
    gender.innerText=user.results[0].gender;
    const name=document.getElementById('name')
    name.innerText= user.results[0].name.title + ' ' +user.results[0].name.first + ' ' + user.results[0].name.last;
 
    
    //image load


    const imageData = user.results[0].picture.medium;
const imageElement = document.createElement("img");
imageElement.src = imageData;
document.getElementById("image-container").appendChild(imageElement);
    
    console.log(user.results[0].picture.medium)
}

randomUser();