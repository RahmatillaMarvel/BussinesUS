// Reviews
const nameBtn1 = document.querySelector(".nameBtn1"),
      nameBtn2 = document.querySelector(".nameBtn2"),
      nameBtn3 = document.querySelector(".nameBtn3");
const name1 = document.querySelector(".name1"),
      name2 = document.querySelector(".name2"),
      name3 = document.querySelector(".name3");

      function show(name) {
        name.style.display = "block"
      }
      function hide(name) {
        name.style.display = "none"
      }
      nameBtn1.addEventListener("click", ()=>{
        show(name1)
        hide(name2)
        hide(name3)
      })
      nameBtn2.addEventListener("click", ()=>{
        show(name2)
        hide(name3)
        hide(name1)
      })
      nameBtn3.addEventListener("click", ()=>{
        show(name3)
        hide(name2)
        hide(name1)
      })
