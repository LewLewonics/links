const category_button = document.querySelectorAll('.category-button');
const edit = document.getElementById('edit-save');
const del_link = document.querySelectorAll('.del-link');
const add_link = document.querySelectorAll('.add-link');
const add_category = document.getElementById('add-category');
const trash = document.querySelectorAll('.fa-trash');

let edit_mode = false;



//Event Listeners

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

//Edit Mode
edit.addEventListener('click', () => {
    edit_mode = !edit_mode;
    del_link.forEach(link => {
        link.classList.toggle('active');
    })
    add_link.forEach(link => {
        link.classList.toggle('active');
    })
    
    if (edit_mode) {
        edit.innerText = "Save";
        add_category.classList.add('active');
        trash.forEach(icon => icon.classList.add('active'));
    }
    else {
        edit.innerHTML = "Edit";
        add_category.classList.remove('active');
        trash.forEach(icon => icon.classList.remove('active'));
    }

    category_button.forEach(category => {
        if (edit_mode) {
            category.parentElement.querySelector('.category-links').classList.add('active');
            let icon = category.parentElement.querySelector('.fa');
            icon.classList.remove('fa-angle-down');
            icon.classList.add('fa-angle-up');
        } else {
            category.parentElement.querySelector('.category-links').classList.remove('active');
            let icon = category.parentElement.querySelector('.fa');
            icon.classList.add('fa-angle-down');
            icon.classList.remove('fa-angle-up');
        }
    });
})

//Remove Link 

//Add Link (Show Modal)

//Add Category (Show Modal)

//Delete Category (Show Yes or No modal)
trash.forEach(icon => {
    icon.addEventListener('click', () => alert('deleted'));
})