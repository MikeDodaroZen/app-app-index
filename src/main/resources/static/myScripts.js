    function timeFunction() {
      var d = new Date();
      var hr = d.getHours();
      var min = d.getMinutes();
      var sec = d.getSeconds();
      min = checkTime(min);
      sec = checkTime(sec);
      document.getElementById("t1").innerHTML = hr+":"+min+":"+sec;
      t = setTimeout('timeFunction()', 500);
    }

    function checkTime(i)
    {
        if (i<10)
        {
            i="0" + i;
        }
        return i;
    }



