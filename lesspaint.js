  new Vue({
    created() {},
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
                         document.getElementById("load").appendChild(div)}
             let hr = document.createElement("hr")
             document.getElementById("load").appendChild(hr)
             }
        },

        dragMyDiv(event) {
          // men vill inte kunna flytta den i mobil eller tablet läge
          if (window.matchMedia('(min-width: 1000px)').matches) {
          event.preventDefault()
          // läs in musens position
          this.positions.clientX = event.clientX
          this.positions.clientY = event.clientY
          document.onmousemove = this.divDrag
          document.onmouseup = this.stopDivDrag
        }},

  
    },
    el: '#app',
  })
  
