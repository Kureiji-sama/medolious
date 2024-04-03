//song list
let All_song = [
   {
     name: "The Last Waltz of Summer",
     path: "music/1.mp3",
     img: "images/1.jpg",
     singer: "Anna Landström"
   },
   {
     name: "Travel by Thought",
     path: "music/2.mp3",
     img: "images/2.jpg",
     singer: "Anna Landström"
   },
   {
     name: "Fresh Perspective",
     path: "music/3.mp3",
     img: "images/3.jpg",
     singer: "Megan Wofford"
   },
   {
     name: "Shining Star",
     path: "music/4.mp3",
     img: "images/4.jpg",
     singer: "Koichi Morita"
   },
   {
     name: "at the mall",
     path: "music/5.mp3",
     img: "images/5.jpg",
     singer: "musmus"
   },
   {
    name: "Sweet vermouth",
    path: "music/6.mp3",
    img: "images/5.jpg",
    singer: "musmus"
   }
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/