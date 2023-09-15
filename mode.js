var icon = document.getElementById("icon");
      icon.onclick = function() {
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")) {
          icon.src = "R-removebg-preview.png";
        }else {
          icon.src = "moon-icon-5-removebg-preview.png";
        }
      };