function restartGame(){
    location.reload();
}

function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}

var start = Date.now();

var interval = setInterval(function() {
    var delta = Date.now() - start;

    document.getElementById('seconds').innerHTML = Math.floor(delta / 1000) % 60;
    document.getElementById('minutes').innerHTML = Math.floor(delta / 60000)
}, 1000);

function finished() {
    var elements = document.getElementsByClassName('dropContainer');

    for (var i = 0; i < elements.length; i++) {
        if (elements[i].childNodes.length == 0) return false;
    }

    return true;
}

function drop(e) {
    e.preventDefault();

    var draggedId = e.dataTransfer.getData("text")
    var targetId = e.target.id;

    if (e.target.tagName == 'IMG') {
        alert('The specified part has already been assigned');
        return;
    }

    if (('draggable' + targetId) != draggedId) {
        alert('The specified part does not belong here');
        return;
    }
    e.target.appendChild(document.getElementById(draggedId));

    if (finished()) {
        alert('You finished the game on time ' + document.getElementById('minutes').innerHTML + ':' + document.getElementById('seconds').innerHTML);
        clearInterval(interval);
    }
}

function showDemo(){
    if (document.getElementById('plus').style.display !== 'none'){
        document.getElementById('plus').style.display = 'none';
        let gif = document.createElement('img');
        gif.src = 'penguin/puzzle-demo.gif';
        gif.id = 'puzzle-demo';
        document.getElementById('plus-plus').appendChild(gif);

        const existingele = document.getElementById("plus-plus");
        document.body.insertBefore(gif, existingele);
    }
    else{
        document.getElementById('plus').style.display = 'block';
        document.getElementById('puzzle-demo').remove();
    }

}
