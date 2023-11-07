
let doceJson =  [
    {
        id:0, 
        name:'Taças', 
        img:'imagens/taca.jpg', 
        price:150.00,
       quantidade:0,
       acao:'<a href="#" class="comprou">Comprar</a>'
    },

    {
        id:1, 
        name:'Ovo de Colher', 
        img:'imagens/ovo-pascoa.jpg', 
        price:70.00,
        quantidade:0,
        acao:'<a href="#" class="comprou">Comprar</a>'
    },

    {
        id:2, 
        name:"Doces Finos", 
        img:"imagens/doces-finos.jpg", 
        price:270.00,
        quantidade:0,
        acao:'<a href="#" class="comprou">Comprar</a>'
        
    },

    {
        id:3, 
        name:"Bolos Aniversário", 
        img:"imagens/bolo.jpg", 
        price:80.00,
        quantidade:0,
        acao:'<a href="#" class="comprou">Comprar</a>'
        
    }
]

doceJson.map((item, index ) => {

    let doceItem = document.querySelector('.doces .doce').cloneNode(true)
     

     document.querySelector('.teste').append(doceItem)
    //preencher dados

    doceItem.querySelector('.doce-item--img img').src = item.img
    doceItem.querySelector('.doce-item--name').innerHTML = item.name
    doceItem.querySelector('.doce-item--price').innerHTML = `R$: ${item.price.toFixed(2)}`
    doceItem.querySelector('.comprou').innerHTML = item.acao
    
})
