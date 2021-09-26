
    const button=document.getElementById('submit');
    const form=document.getElementById('form');
    const message=document.getElementById('message');

    button.addEventListener('click',(e)=>{
        e.preventDefault();
        const input = document.getElementById('number');
        if(!isNaN(input.value) && input.value.length>8){
            if(document.querySelector('.error')){
                document.querySelector('.error').remove()
            }
            const data = {phone:input.value};
            form.style.display='none';
            message.style.display='block';
            message.innerHTML=`<h3>Ожидайте...</h3>`
            fetch('https://httpbin.org/post ',{
                method:'POST',
                body:JSON.stringify(data),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then((res)=>res.json())
            .then((data)=>{
                console.log('Успех',data)
                message.innerHTML=`<h3>Спасибо, скоро с вами свяжутся</h3>`
            })
            .catch((err)=>{
                console.log('Ошибка', err)
                message.innerHTML=`<h3>Извините, произошла какая-то ошибка</h3>`
            })
        }
        else{
            if(!document.querySelector('.error')){
            const error = document.createElement('h3');
            error.classList.add('error');
            error.innerHTML='Заполните поле корректно'
            document.body.append(error);
            }
        }
        
    })


