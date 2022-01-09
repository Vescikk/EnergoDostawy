let input = document.querySelector('.supply-input');
const inputBtn = document.querySelector('.supply-btn_addEAN');
const inputedEan = document.querySelectorAll('.supply-productsList_ean')
let prodCouter = document.querySelector('.couter');
let couter = 0;
let tempEan = 0;

let eanList = [];

function checkEANLength(tempEan){
  if(tempEan.length === 13 || tempEan.length === 8 ){console.log('EAN jest prawidłowy')}else{console.log('Kod EAN jest za krótki');return}
}
function matchEAN(EAN,prodList){
  for(let i =0; i < prodList.length;i++){
    if(EAN === prodList[i]){
      console.log('taki sam')
      couter++;
      console.log(couter)
      console.log(eanList)
      break
    }
  }
}

function createProduct(){
 let newDiv = document.createElement('div');
 newDiv.classList.add('supply-productsList')
}

createProduct();


inputBtn.addEventListener('click',function(){
  tempEan = input.value;
  checkEANLength(tempEan);
  eanList.push(tempEan);
  matchEAN(tempEan,eanList);
})

