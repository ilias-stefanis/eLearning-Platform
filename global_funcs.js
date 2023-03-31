
function menuToggle() {
    var x = document.querySelector(".sidebar");
    if (x.style.visibility == "hidden") {
        x.classList.remove("top-effect");
        x.classList.add("blur-effect");
      x.style.visibility = "visible";
    } else {
      x.style.visibility = "hidden";
    }
    return false;
  }

function checkMedia850(media) {
    /*console.log("entering if850!");*/
    try {
        if (media.matches) {
            var x = document.querySelector(".sidebar");
            /*x.setAttribute("visibility", "visible");*/
            x.style.visibility = "hidden";
            /*console.log("hidden sidebar bug fix! 850");*/
        } else {
            var x = document.querySelector(".sidebar");
            x.style.visibility = "visible";
            // Desktop
        }
    } catch (error) {

    }
}

function checkMedia1200(media) {
    /*console.log("entering if1200!");*/
    try {
        if (media.matches) {
            var x = document.querySelector(".sidebar");
            /*x.setAttribute("visibility", "visible");*/
            x.style.visibility = "visible";
        } else {
            x.style.visibility = "hidden";
        }
    } catch (error) {

    }
}

function passwordVisibility(x) {

    /*x.classList.toggle("icon_show");*/
    var pw = document.getElementById("psw");
    var pw_r = document.getElementById("psw-repeat");
    if (pw.type === "password") {
        pw_r.type = "text";
        pw.type = "text";
    } else {
        pw_r.type = "password";
        pw.type = "password";
    }

    var x = document.querySelector(".icon");
    /*console.log(x);*/
    if (x.classList.contains('icon_show')) {

        x.classList.remove( "icon_show" );
        x.classList.add( "icon_hide" );
    } else {

        x.classList.remove( "icon_hide" );
        x.classList.add( "icon_show" );
    }
  }

function checkPasswordsMatch() {
    const password = document.querySelector('input[name=psw]');
    const confirm = document.querySelector('input[name=psw_repeat]');
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
  }


var m850 = window.matchMedia('(max-width: 850px)');
checkMedia850(m850); // Call listener function at run time
m850.addListener(checkMedia850);

var m1200 = window.matchMedia('(max-width: 851px)');
checkMedia1200(m1200); // Call listener function at run time
m1200.addListener(checkMedia1200);





function slider_result_view(){
    var slider = document.getElementById("Range");
    console.log(slider);
    var output = document.getElementById("slider_result");
    console.log(slider.value);

      if (slider.value == 1) {
        output.innerHTML = "Very Unlikely";
      } else if (slider.value == 2) {
        output.innerHTML = "Unlikely";
      } else if (slider.value == 3) {
        output.innerHTML = "Maybe";
      }else if (slider.value == 4) {
        output.innerHTML = "Likely";
      } else if (slider.value == 5) {
        output.innerHTML = "Very Likely";
      }


}

/*slider.oninput = slider_result_view();*/







var myInput = document.getElementById("psw");
var myInput_repeat = document.getElementById("psw-repeat");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var pw_same = document.getElementById("pw_same");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}

// When the user clicks on the password field, show the message box
myInput_repeat.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput_repeat.onblur = function() {
    document.getElementById("message").style.display = "none";
}


// When the user starts to type something inside the password field
myInput.onkeyup = function () {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }

    if(myInput.value == myInput_repeat.value){
        pw_same.classList.remove("invalid");
        pw_same.classList.add("valid");
    } else {
        pw_same.classList.remove("valid");
        pw_same.classList.add("invalid");
    }
}

myInput_repeat.onkeyup = function () {
    if(myInput.value == myInput_repeat.value){
        pw_same.classList.remove("invalid");
        pw_same.classList.add("valid");
    } else {
        pw_same.classList.remove("valid");
        pw_same.classList.add("invalid");
    }
}














function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }

  /*An array containing all the country names in the world:*/
  var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

  /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
  autocomplete(document.getElementById("country"), countries);
