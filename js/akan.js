var submit = function(cc, yy, mm, dd) {

    return (((cc/4) - 2 * cc - 1) + ((5 * yy/4)) + ((26(mm + 1)/10)) + dd)%7;

  };

  var gender = document.getElementById('gender');
  var cc = document.getElementById('century');
  var yy = document.getElementById('birhtyear');
  var mm = document.getElementById("birthmonth");
  var dd = document.getElementById('birthdate');



    if(gender.value === "" || century.value === "" || birthyear.value === "" || birthmonth.value === "" || birthdate.value === "")
    {
      alert("no blank values allowed!")
    }
    else {

    }
