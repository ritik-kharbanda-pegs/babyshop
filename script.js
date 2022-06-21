//open and close sidebar
  function openNav() {
    document.getElementById("mySidenav").style.width = "320px";
  //   document.getElementById("body").classList.add('background')
  //   document.body.style.backgroundColor = '#E0DEDE'
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
 
//functions for add, show ,delete  
  const item = []
  let qty = 0
  const itemList = document.getElementById('item-list')
  const all_items_button = Array.from(document.querySelectorAll("a.btn"))
  const shoppingBag = document.getElementById('shoppingBag')
  
  function addItem(name,price) {
      let obj = {name:name, price:price}
      item.push(obj)
      qty+=1
      shoppingBag.innerHTML = `SHOPPING BAG (${qty})`
    }
    
  let itemStr = ''
  function showItems(){
      itemStr=''
      for(let i=0; i<item.length;i++){
      console.log(item[i].name , item[i].price );
      itemStr+= `<div class="row p-2  w-100">
        <h5 class="text-white col">${item[i].name}</h5> 
        <p class="text-white col">$ ${item[i].price}.00</p>
        <button class= "btn btn-danger col remove" data-name= ${item[i].name}>Remove</button>
      </div>`
      }
      itemList.innerHTML = itemStr
  }

  itemList.onclick = function(e){
    if(e.target && e.target.classList.contains('remove')){
        const name = e.target.dataset.name
        removeItem(name)
    }
  }

  function removeItem(name){
      for(let i=0;i<item.length;i++){
          if(item[i].name===name)
          item.splice(i,1)
      }
      showItems()
      qty-=1
      shoppingBag.innerHTML = `SHOPPING BAG (${qty})`
  }

  all_items_button.forEach(elt => elt.addEventListener('click', () => {
    addItem(elt.getAttribute('id'), elt.getAttribute('data-price'))
    showItems()
  }))
