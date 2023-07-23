var btn = document.getElementById("btn")

      var audio = document.getElementById('music');

      var buttonState = true;

      function playMusic(){
        btn.classList.toggle("active");

        if(buttonState){
        buttonState = false;
        audio.play();
        } else{
        buttonState = true;
        audio.pause();
        }
      }

      window.addEventListener('load', function() {
      audio.play();
      });
