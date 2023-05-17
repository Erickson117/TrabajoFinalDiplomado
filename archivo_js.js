
const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: btoa(username.value),
        password: btoa(password.value)
    }
    if( data.username == 'cGF0bw==' && data.password =='Y3VhY2s='){
        location.href = 'bandera.html'
    }else{
        location.href = 'error.html'
    }
    //console.log(data)
})



