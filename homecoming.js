var lasttab = 1;

      // When the user scrolls the page, execute myFunction
      window.onscroll = function () { myFunction() };

      // Get the navbar
      var navbar = document.getElementById("navbar");

      // Get the offset position of the navbar
      var sticky = navbar.offsetTop;

      // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
      function myFunction() {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky")
        } else {
          navbar.classList.remove("sticky");
        }
      }

      function tabcontent(option) {

        switch (option) {
          case 1:
            document.getElementById("information").style.display = "";
            document.getElementById("link1").setAttribute("class", "active");
            lasttab = 1;
            break;
          case 2:
            document.getElementById("featured").style.display = "";
            document.getElementById("link2").setAttribute("class", "active");
            lasttab = 2;
            break;
          case 3:
            document.getElementById("program").style.display = "";
            document.getElementById("link3").setAttribute("class", "active");
            lasttab = 3;
            break;
          case 4:
            document.getElementById("prizes").style.display = "";
            document.getElementById("link4").setAttribute("class", "active");
            lasttab = 4;
            break;
          case 5:
            document.getElementById("rsvp").style.display = "";
            document.getElementById("link5").setAttribute("class", "active");
            lasttab = 5;
            break;
          case 7:
          document.getElementById("misc").style.display = "";
          document.getElementById("link7").setAttribute("class", "active");
          lasttab = 7;
          break;
          case 8:
            document.getElementById("menu").style.display = "";
            document.getElementById("link8").setAttribute("class", "active");
            lasttab = 8;
            break;
        }
      }

      function checklasttab(option) {

        switch (lasttab) {
          case 1:
            document.getElementById("information").style.display = "none";
            document.getElementById("link1").setAttribute("class", "");
            break;
          case 2:
            document.getElementById("featured").style.display = "none";
            document.getElementById("link2").setAttribute("class", "");
            break;
          case 3:
            document.getElementById("program").style.display = "none";
            document.getElementById("link3").setAttribute("class", "");
            break;
          case 4:
            document.getElementById("prizes").style.display = "none";
            document.getElementById("link4").setAttribute("class", "");
            break;
          case 5:
            document.getElementById("rsvp").style.display = "none";
            document.getElementById("link5").setAttribute("class", "");
            break;
          case 7:
          document.getElementById("misc").style.display = "none";
          document.getElementById("link7").setAttribute("class", "");
            break;
          case 8:
            document.getElementById("menu").style.display = "none";
            document.getElementById("link8").setAttribute("class", "");
            break;
        }

        tabcontent(option);
      }

      /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction2() {
  var x = document.getElementById("navbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
