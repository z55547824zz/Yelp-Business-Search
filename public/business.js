function clearForm() {
    document.getElementById('Keyword').value = '';
    document.getElementById('Distance').value = '10';
    document.getElementById('Category').value = 'Default';
    document.getElementById('Location').value = '';
    document.getElementById('auto').checked = false;
    autoLoc();
    document.getElementById('tdiv').innerHTML = "";
    document.getElementById('ddiv').style.visibility = "hidden";
    location.href = "#";

}

function autoLoc() {
    if (document.getElementById('auto').checked){
        getLoc();
        document.getElementById('Location').value = "";
        document.getElementById('Location').disabled = "true";
        document.getElementById('autoValue').value = "true";
        document.getElementById('location_star').style = "color: gray";
        document.getElementById('location_word').style = "color: gray";
    } else{
        document.getElementById('Location').disabled = "";
        document.getElementById('autoValue').value = "false";
        document.getElementById('location_star').style = "color: red";
        document.getElementById('location_word').style = "color: black";
    }
}

var autoLocation = '';

function getLoc(test) {
    if (test == "mock") return true;
    var tk = "7240d3e2244200";
    $.ajax({
         url: 'https://ipinfo.io/',
         type: 'get',
         //contentType: 'application/json',
         data: "token=" + tk,
         success: function (res) {
             console.log(res.loc);
             const parts = res.loc.split(",");
             const part1 = parts[0];
             const part2 = parts[1];
             document.getElementById('ipLat').value = part1;
             document.getElementById('ipLng').value = part2;
             console.log(part1);
             console.log(part2);
             autoLocation = res.loc;
         }
     })
}

function sum(a, b) {
    return a + b;
}
module.exports = {
    sum,
    getLoc
};




