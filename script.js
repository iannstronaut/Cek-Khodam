const coba = document.getElementById('nama').value;
const button = document.getElementById('buton')

button.addEventListener('click',function (e){
    e.preventDefault;  
    console.log(coba.value);
    localStorage.setItem('nama', nama.value);
    window.location.href = 'pages/result.html';
})