function add() {
    var node = document.createElement('li');
    let x = document.getElementById("myInput").value;
    if(x=="") {
        alert("Input must be filled out")
    } else {
        node.appendChild(document.createTextNode(x));
        document.querySelector('ul').appendChild(node);
        document.getElementById("myInput").value = "";
    }
}

// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     myNodelist[i].appendChild(span);
// }

function check() {
    function getEventTarget(e) {
        e = e || window.event;
        return e.target || e.srcElement; 
    }
    
    var ul = document.getElementById('myUL');

        ul.onclick = function(event) {
            var target = getEventTarget(event);
            // alert(target.innerHTML);
            target.setAttribute("class", "checked");
        };
}

function empty() {
    document.getElementById("myUL").innerHTML = "";
}