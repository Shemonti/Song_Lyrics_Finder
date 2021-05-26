let serachbtn = document.getElementById('searchbtn')
let searchuser = document.getElementById('searchUser')
let detail=document.getElementById('profile')
// let ui = new UI();
serachbtn.addEventListener('click', srch);
function srch(){
 

 detail.innerHTML=""


let srchvalue=searchuser.value

  fetch(`https://api.lyrics.ovh/suggest/${srchvalue}`)
  .then(response => response.json())
  .then(data => {
    let dat=data.data
    dat.forEach((element,index) => {
     
      detail.innerHTML += ` <ul class="list-group">
                  <li get_artist="${element.artist.name}" get_title="${element.title}" class="list-group-item" aria-disabled="true">${index+1}.${element.title}-${element.artist.name}
                  <br>   <a id="lyric" href="">see lyrics</a>
                </li>
                
              </ul>`
      
    });
    
   
  });

  
}


profile.addEventListener('click',getlyrics)

function getlyrics(e){
  if(e.target.hasAttribute("href")){
  let artist=  e.target.parentElement.getAttribute('get_artist')
  let title=   e.target.parentElement.getAttribute('get_title')
  

  fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
   .then(response => response.json())
   .then(data => {
     
    detail.innerHTML=`<div>
    <pre class="lead">${data.lyrics}</pre>
    </div>`
  });

  }

  e.preventDefault()
}







// fetch('https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime')
// .then(response => response.json())
// .then(data => console.log(data.lyrics));







// detail.innerHTML=""


// let srchvalue=searchuser.value

//   fetch(`https://api.lyrics.ovh/suggest/${srchvalue}`)
//   .then(response => response.json())
//   .then(data => {
//     let dat=data.data
//     dat.forEach((element,index) => {
//       console.log(index+1,element.title)
//       detail.innerHTML += ` <ul class="list-group">
//                   <li class="list-group-item" aria-disabled="true">${index+1}.
//                   ${element.title}-${element.artist.name}
//                   <br>   <a href="...">see lyrics</a>
//                 </li>
                
//               </ul>`
      
//     });
    
   
//   });




