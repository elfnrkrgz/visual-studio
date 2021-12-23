let submitButonu = document.getElementById('submit');
let toplama = document.getElementById('toplama');
let inputText = document.getElementById('inputText');
let dropButonu = document.getElementById('drop');

submitButonu.addEventListener('click',function(){
  let paragraf = document.createElement('p');
  paragraf.classList.add('paragraf-style');
  toplama.appendChild(paragraf);
  paragraf.innerHTML=inputText.value;
  inputText.value="";


  paragraf.addEventListener('click',function(){
        toplama.removeChild(paragraf);
  })

  dropButonu.addEventListener('click',function(){
          paragraf.remove();
  })


})