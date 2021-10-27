
function csgo(){
    let i = document.getElementById("csgo").checked;

    if(i !== false){
        document.getElementById("pocethracov").style.display="block";
        document.getElementById("ine").style.display="none";
        document.getElementById("post").style.display="none";
    }else {
        document.getElementById("pocethracov").style.display="none";
    }
}

function dota(){
    let i = document.getElementById("dota").checked;

    if(i === true){
        document.getElementById("post").style.display="block";
        document.getElementById("pocethracov").style.display="none";
        document.getElementById("ine").style.display="none";
    }else {
        document.getElementById("pocethracov").style.display="none";

    }
}

function leagueoflegends(){
    let l = document.getElementById("leagueoflegends").checked;

    if(l === true){
        document.getElementById("post").style.display="block";
        document.getElementById("pocethracov").style.display="none";
        document.getElementById("ine").style.display="none";
    }else {
        document.getElementById("pocethracov").style.display="none";
    }
}

function inehry(){
    let x = document.getElementById("bla").checked;


    if(x === true){
        document.getElementById("post").style.display="none";
        document.getElementById("pocethracov").style.display="none";
        document.getElementById("ine").style.display="block";
    }else {
        document.getElementById("pocethracov").style.display="none";
    }
}

function spustac(){
    let ano = document.getElementById("ano").checked;


    if (ano === true){

        document.getElementById("neukazuje").style.display="none";
    }else{

        document.getElementById("neukazuje").style.display="block";
    }

}

function checkdate(){
    let Bdate = document.getElementById('date').value;
    let Bday = +new Date(Bdate);
    let years = ~~((Date.now() - Bday) / (31557600000));
    let vek = document.getElementById("age").value;
    let tmp = vek - years;
    let date = document.getElementById("date").value;

    if(date === '' || date === null){
        document.getElementById("date").style.border="thin solid red";
    }else{
        if(tmp === 0){
            document.getElementById("date").style.border="thin solid green";
            document.getElementById("age").style.border="thin solid green";
        }else {
            document.getElementById("date").style.border="thin solid red";
            document.getElementById("age").style.border="thin solid red";
        }
    }


}

function emailcheck(){
    let emailReg = /^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,4})$/;
    let email = document.getElementById("email").value;

    if(email.match(emailReg)){
        document.getElementById("email").style.border="thin solid green";
    }else {
        document.getElementById("email").style.border="thin solid red";
    }
}

function meno(){
    let meno = document.getElementById("name").value;

    if (meno.trim()==='' || meno.trim() === null){
        document.getElementById("name").style.border="thin solid red"
    }else {
        document.getElementById("name").style.border="thin solid green"
    }
}

function priezvisko(){
    let priezvisko = document.getElementById("lastname").value;

    if (priezvisko.trim()==='' || priezvisko.trim() === null){
        document.getElementById("lastname").style.border="thin solid red"
    }else {
        document.getElementById("lastname").style.border="thin solid green"
    }
}

form.addEventListener('submit', (e)=>{
    let msg = [];
    let email = document.getElementById("email").value;
    let emailReg = /^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,4})$/;
    let meno = document.getElementById("name").value;
    let priezvisko = document.getElementById("lastname").value;
    let date = document.getElementById("date").value;
    let Bday = +new Date(date);
    let years = ~~((Date.now() - Bday) / (31557600000));
    let vek = document.getElementById("age").value;
    let tmp = vek - years;

    if(date === '' || date === null){
        document.getElementById("date").style.border="thin solid red";
        msg.push('');
    }
    if(meno.trim() === '' || meno.trim() === null){
        document.getElementById("name").style.border="thin solid red";
        msg.push('');
    }
    if(tmp !== 0){
        document.getElementById("age").style.border="thin solid red";
        msg.push('');
    }
    if(priezvisko.trim() === '' || priezvisko.trim() === null){
        document.getElementById("lastname").style.border="thin solid red";
        msg.push('');
    }
    if(!email.match(emailReg)){
        document.getElementById("email").style.border="thin solid red";
        msg.push('');
    }
    if(msg.length > 0){
        e.preventDefault();
    }
});


