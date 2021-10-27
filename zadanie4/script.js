addEventListener('submit', (submitListener) => {
    submitListener.preventDefault();
    let modal = document.getElementById("myModal");
    let btn = document.getElementById("generuj");
    let span = document.getElementsByClassName("close")[0];

    document.getElementById("myModal").style.display="block";

    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    let tableSpace = document.getElementById("tableSpace");

    tableSpace.innerHTML="";

    tableCreate();

})

function power(x, y){
    return Math.pow(x * y, 2);
}

function tableCreate(){
    let td;
    let x = document.getElementById("valuex").value;
    let y = document.getElementById("valuey").value;
    let tbl = document.createElement('table');
    let modal = document.getElementById("tableSpace");

    tbl.style.width  = '100px';
    tbl.style.border = '1px solid black';

    for(let i = 0; i <= x; ++i){
        let tr = tbl.insertRow();
        for(let j = 0; j <= y; ++j){
            if(i === 0 && j === 0) {
                let td = tr.insertCell();
                td.appendChild(document.createTextNode('    '));
            }else if(i === 0){
                td = tr.insertCell();
                td.appendChild(document.createTextNode("X=" + j));
            }else if(j === 0){
                td = tr.insertCell();
                td.appendChild(document.createTextNode("Y=" + i));
            }else{
                td = tr.insertCell();
                td.appendChild(document.createTextNode("" + power(i, j)+""));
                td.style.border = '2px solid black';
            }
        }
    }
    modal.appendChild(tbl);
}

