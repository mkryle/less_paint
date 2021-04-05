  new Vue({
  
    data: {
      currentColor: "black",

      theColorBlack: "black",
      theColorWhite: "white",
      theColorRed: "red",
      theColorBlue: "blue",
      theColorGreen: "green",
      theColorYellow: "yellow",


    },
    methods: {
       load_less_paint_pixels() {
            let i
             for (i = 0; i < 3; i++) {
                 let j
                     for (j = 0; j < 3; j++) {
                         let div = document.createElement("div")
                         div.className = "pixel"
                         div.id = i + "." + j
                         document.getElementById("load").appendChild(div)
                        }
             let hr = document.createElement("hr")
             document.getElementById("load").appendChild(hr)
             }
        },



    },

    created() {
      let pixels = document.getElementsByClassName("pixel")
      pixels.setAttribute('onmousedown', drawStuff())
      function drawStuff(){
        // todo the stuff here
      }
       },

    el: '#app',
  })

