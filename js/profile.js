const category_button = document.querySelectorAll('.category-button');

//Category dropdown 
category_button.forEach(category => {
    category.addEventListener('click', () => {
        category.parentElement.querySelector('.category-links').classList.toggle('active');
        let icon = category.parentElement.querySelector('.fa');
        if (icon.classList.contains('fa-angle-down')) {
            icon.classList.remove('fa-angle-down');
            icon.classList.add('fa-angle-up');
        } else {
            icon.classList.remove('fa-angle-up');
            icon.classList.add('fa-angle-down');
        }
    })
});