var xhttp = new XMLHttpRequest();

xhttp.open("POST", "http://urbangamers.net/thumbs.php", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("thumbs.php?do=add&contenttype=post&thumb=-1&contentid=261919&securitytoken=1449342463-db70592f86bed575d0829051e5a152c82bdb8110");
alert("done!");