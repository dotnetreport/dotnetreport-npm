 
function Amar() {
    alert('amar');
}

function AppViewModel1() {
    this.firstName1 = "fname_ko_1";
    this.lastName1 = "lname_ko_1";
}

function AppViewModel2() {
    this.firstName2 = "fname_ko_2";
    this.lastName2 = "lname_ko_2";
}


$(document).ready(function () {
    console.log('Jquery loaded');
    $(".btn").css( "border", "3px solid red" );
});



function Ko1(){
    ko.applyBindings(new AppViewModel1());
}

function Ko2(){
    ko.applyBindings(new AppViewModel2());
}


module.exports = {
    Ko1, Ko2, Amar
}
