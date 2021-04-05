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

             for (i = 0; i < 300; i++) {
                 let j

                     for (j = 0; j < 300; j++) {
                         let div = document.createElement("div")
                         div.className = "pixel"
                         div.id = i + "." + j
                         div.setAttribute('onmouseover', 'drawStuff("'+ i +'.'+j +'")')
                         document.getElementById("load").appendChild(div)
                        }

             let hr = document.createElement("hr")
             document.getElementById("load").appendChild(hr)
             }

        },

        pickBlack(){
          currentColor = theColorBlack
          console.log('black')
        },

        pickWhite(){
          currentColor = theColorWhite
          console.log('white')
        },
        
        pickRed(){
          currentColor = theColorRed
          console.log('red')
        },

        pickBlue(){
          currentColor = theColorBlue
          console.log('blue')
        },

        pickGreen(){
          currentColor = theColorGreen
          console.log('green')
        },

        pickYellow(){
          currentColor = theColorYellow
          console.log('yellow')
        },



    },

    created() {
     
       },

    el: '#app',

  })

  function drawStuff(something){                      // work in progress

  let palette = document.getElementsByClassName(load)

  palette.onmouseover=function()
  {
    let pixel = document.getElementById(something)    // find's the correct number

      pixel.style.color = "purple"                    //   does not happen
      console.log('Oh-YEEEAAHH!')                     //   no "ohyeah" ion log =(
  }
  console.log(something)                              // log's correcct number
}
  

