  var mousedown = 0;
  document.body.onmousedown = function() { 
  mousedown = 1;
  }
  document.body.onmouseup = function() {
    mousedown = 0;
  }

  // ------------------- The loop ----------------------
 function load_less_paint_pixels() {
    let i
     for (i = 0; i < 100; i++) {
         let j
             for (j = 0; j < 100; j++) {
                 let div = document.createElement("div")
                 div.className = "pixel"
                 div.id = i + "." + j
        //         div.setAttribute('onmouseover', 'drawStuff("'+ i +'.'+j +'")')
                 document.getElementById("load").appendChild(div)
                }
     let hr = document.createElement("hr")
     document.getElementById("load").appendChild(hr)
     }}
// --------------------- The loop Ends ----------------------


$( document ).ready(function() {
  load_less_paint_pixels();
  var color = "Black";

  $( ".pixel" ).mouseover( function() {
      if(mousedown == 1){
          $( this ).css("background-color", color); 
      }
  });

  $( ".color" ).on("click", function() {
    $( ".color" ).removeClass("selected");
    $( this ).addClass("selected");
    color = $( this ).attr("id");
})
});

function reset() {
  $( ".pixel" ).css("background-color", "white"); 
}


