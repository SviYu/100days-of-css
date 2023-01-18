let profiles = document.querySelectorAll('.profile');
let detail = document.querySelector('.detail');
let closeBtn = document.querySelector('.close');

profiles.forEach(
    profile => profile.addEventListener('click', function () {
    detail.classList.add('active')
})

)

closeBtn.addEventListener('click', function () {
    detail.classList.remove('active')
})

