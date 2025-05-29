
function navegacaoTab () {
const jsTab = document.querySelectorAll(".js-tab li");
const jsContent = document.querySelectorAll(".js-content div");

if (jsTab.length && jsContent.length) {
  jsContent[0].classList.add("mostrar");
  jsTab.forEach((item, index) => {
    item.addEventListener("click", () => {
      jsContent.forEach((item) => item.classList.remove("mostrar"));
      jsContent[index].classList.add("mostrar");
    });
  });
}

}


navegacaoTab();


const dtFaq = document.querySelectorAll('.faq dt')
const ddFaq = document.querySelectorAll('.faq dd')


if (dtFaq.length && ddFaq.length) {
ddFaq[0].classList.add('mostrar')
dtFaq[0].classList.add('mostrar')

dtFaq.forEach( (item) => 
{      

        item.addEventListener('click', (e) => {
          e.currentTarget.classList.toggle('mostrar')
        
          e.currentTarget.nextElementSibling.classList.toggle('mostrar')
        })
})
}