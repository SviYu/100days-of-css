const date = new Date();
const today = date.toLocaleDateString('en-GB', {weekday : 'short', day: '2-digit', month: 'short', year: 'numeric'});

const hoursNow = date.toLocaleTimeString('pt-BR', {hour:'2-digit', minute: '2-digit'})

document.querySelector('.date').innerText = today;
document.querySelector('.time').innerText = hoursNow;