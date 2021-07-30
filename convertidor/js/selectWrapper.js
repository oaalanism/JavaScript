window.addEventListener('load', function(){
    for(const select of document.querySelectorAll('.select-wrapper')){
        select.addEventListener('click', function(){
            this.querySelector('.select').classList.toggle('open');
        });
    }
    
    for(const option of document.getElementsByClassName('option')){
        
        option.addEventListener('click', function() {
            if (!this.classList.contains('selected')) {
                var select = this.closest('.select');
                var imageDivisaOrigen = select.querySelector('.select__trigger .logo-divisa');
                var labelDivisaOrigen = select.querySelector('.select__trigger .name-divisa');
                var valorDivisaOrigen = select.querySelector('.select__trigger .valor-divisa');

                var id = this.closest(".info-divisa").getAttribute("id");

                if(id == "div-divisa-tranformar"){
                    document.getElementById("div-divisa-origen")
                    .querySelector('.select-wrapper .select .options .option.none')
                    .classList.remove('none');

                    document.getElementById("div-divisa-origen")
                    .querySelector('.select-wrapper .select .options .option .name-divisa[name='+this.querySelector('.name-divisa').getAttribute("name")+']')
                    .parentElement.classList.add('none');
                    
                }
                else{
                    document.getElementById("div-divisa-tranformar")
                        .querySelector('.select-wrapper .select .options .option.none')
                        .classList.remove('none');

                    document.getElementById("div-divisa-tranformar")
                        .querySelector('.select-wrapper .select .options .option .name-divisa[name='+this.querySelector('.name-divisa').getAttribute("name")+']')
                        .closest(".option").classList.add('none');
                }
                
                this.parentNode.querySelector('.option.selected').classList.remove('selected');
                this.classList.add('selected');
                imageDivisaOrigen.setAttribute("src", this.querySelector(".logo-divisa").getAttribute("src"));
                labelDivisaOrigen.setAttribute("name", this.querySelector(".name-divisa").getAttribute("name"));
                labelDivisaOrigen.innerHTML = this.querySelector('.name-divisa').textContent;
                valorDivisaOrigen.setAttribute("value", this.querySelector(".valor-divisa").getAttribute("value"));    
            }
            
        })
    }
    
    window.addEventListener('click', function(e){
        for(const select of document.querySelectorAll('.select')){
            if (!select.contains(e.target)) {
                select.classList.remove('open');
            }
        }
            
    });
})

