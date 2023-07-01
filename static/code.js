
const videobtnClicked = (event) => {
    video_name = "static/videos/".concat(event.target.id);

    document.getElementById("video_src").setAttribute("src",video_name.concat(".mp4"));
    console.log(video_name.concat(".mp4"));

    document.getElementById("video").load();
    document.getElementById("video").play();

    data = [video_name,"start",Math.floor(Date.now() / 1000).toString()]
    console.log(data);   
    $.ajax({
      url: '/log',
      data: JSON.stringify(data),
      type: 'POST',
      success: function(response) {
          console.log(response);
      },
      error: function(error) {
          console.log(error);
      }
  });




  }

function addListenerMulti(el, s, fn) {
  s.split(' ').forEach(e => el.addEventListener(e, fn, false));
}


function setup() {


        btns = document.getElementsByClassName("video_btn");

        for(var i=0; i < btns.length; i++)
        {
            btns[i].addEventListener('click',videobtnClicked);
        }

      
      var video = document.getElementById('video');
      
      addListenerMulti(video, 'ended pause seeking play volumechange stop', function(e){
        data = [video_name,e.type,Math.floor(Date.now() / 1000).toString()]
        
    console.log(data);   
    $.ajax({
      url: '/log',
      data: JSON.stringify(data),
      type: 'POST',
      success: function(response) {
          console.log(response);
      },
      error: function(error) {
          console.log(error);
      }
  });



      });


}

document.addEventListener("DOMContentLoaded", setup);