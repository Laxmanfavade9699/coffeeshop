// sticky Navbar
window.addEventListener('scroll',function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);
}); 

/*filterable cards */

let list = document.querySelector('.list');
let card = document.querySelector('.card');

for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click',function(){
        for(let j=0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for( let k=0; k<card.length; k++)
        {

            card[k].classList.remove('active');
            card[k].classList.add('hide');

             if(card[k].getAttribute('data-item') == dataFilter || dataFilter == 'all'){
                 card[k].classList.remove('hide');
                 card[k].classList.add('active');
             }
        }
    })
}
