/**
 * Created by patrick on 2/10/2017.
 */


var totalEtc = 0;
var etcPerMonth = 0;
var monthsSinceStart = 7;
var nodig = 0;
var ectNodig = 50;
var u = 0;

 function instellingen(){
    window.location.assign("Instellingen.html");
}

function home(){
    window.location.assign("Main.html");
}

function voortgang(){
    window.location.assign("Voortgang.html");
}



 document.getElementById('submit').onclick = function() {
     for (i =1 ; i <= 12; i++) {
         s = "e" + i;

         if (document.getElementById(s).value != null) {

             u = document.getElementById(s).value
                 ? document.getElementById(s).value : 0;
             u = parseInt(u);
             totalEtc += u;

             etcPerMonth = totalEtc / monthsSinceStart;

            nodig = (ectNodig - totalEtc) / etcPerMonth;
         }
     }
     document.getElementById('ect').innerHTML = totalEtc;
     document.getElementById('ectmonths').innerHTML = etcPerMonth;
     document.getElementById('months').innerHTML = nodig;

     document.getElementById('popup').classList.remove('hidden');
     totalEtc = 0;
 };


 document.getElementById('close').onclick = function () {

    document.getElementById('popup').classList.add('hidden');
 };
