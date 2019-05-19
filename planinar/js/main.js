 function toggleFunction() {
   var x = document.getElementById("collapse");
   if (x.style.display === "block") {
     x.style.display = "none";
   } else {
     x.style.display = "block";
   }
 }

var mojedugme = document.getElementById('dugme');
 mojedugme.addEventListener("click", function(event){
	    event.preventDefault()
	});
	mojedugme.onclick = function(){
 	salji();
   };
   
    function salji() {
      let PROVERA = true; 
      PROVERA = proveriIme() && proveriMejl();
      if(PROVERA){     	
        $("#hide1").hide();

			  $("#hvala").show(1000);
      }    
    }
    
   document.getElementById("ime").onblur = function(){
      proveriIme();
     };
	  function proveriIme() {
	      var ime = document.getElementById('ime').value.trim();
	      if (/^[a-zčćšđžA-ZČĆŠĐŽ]{3,}(\s?[A-zčćšđž])*$/.test(ime) == true) {
	         $( "#forIme" ).removeClass( "vidi-poruku" );
	         return true;
	      } else
	     { 
	      $( "#forIme" ).addClass( "vidi-poruku" );  
	         return false;
	   }
	   }
	   
	  document.getElementById("email").onblur = function(){
      proveriMejl();
     };
	  function proveriMejl() {
	      var mejl = document.getElementById('email').value.trim();
	      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mejl) == true) {
	         $( "#forMejl" ).removeClass( "vidi-poruku" );
	         return true;
	      } else
	     { 
	      $( "#forMejl" ).addClass( "vidi-poruku" );  
	         return false;
	   }
	   }