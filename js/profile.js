const category_button = document.querySelectorAll('.category-button');
const edit = document.getElementById('edit-save');
const del_link = document.querySelectorAll('.del-link');
const add_link = document.querySelectorAll('.add-link');
const add_category = document.getElementById('add-category');
const trash = document.querySelectorAll('.fa-trash');
const modal = document.getElementById('modal');
const close_modal = document.getElementById('close');
const modal_content = document.getElementById('modal-content');

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
del_link.forEach(link => {
    link.addEventListener('click', e => {
        //Remove Link from DOM
        e.target.parentElement.remove();
        //Request to database to remove from there
    })
});

//Add Link (Show Modal)
add_link.forEach(link => {
    link.addEventListener('click', () => {
        //Open Modal
        modal.classList.add('active'); 
        //Change Modal Content
        modal_content.innerHTML = `
            <form action="/action_page.php">
                <input type="text" placeholder="link name">
                <input type="text" placeholder="link address">
                <input type="submit" value="Add" class='accept-btn'></button>
            </form>
        `
        //Request to database to add new information
        })
});

//Add Category (Show Modal)
add_category.addEventListener('click', () => {
    //Open Modal
    modal.classList.add('active'); 
    //Change Modal Content
    modal_content.innerHTML = `
        <form action="/action_page.php">
            <input type="text" placeholder="category name">
            <input type="submit" value="Add" class='accept-btn'></button>
        </form>
    `
    //Request to database to add new information
})
//Delete Category (Show Yes or No modal)
trash.forEach(icon => {
    icon.addEventListener('click', (e) => {
        modal.classList.add('active');
        console.log(e.target.parentElement.parentElement)
        modal_content.innerHTML = `
        <p>Are you sure you want to delete "${e.target.parentElement.querySelector('.category-name').innerText}"</p>
        <form action="/action_page.php">
        <input type="submit" value="Delete" class='decline-btn'></button>
        </form>
        `
    });
})

//Close Modal on outside click
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('active') : false );
//Close Modal on Btn
close_modal.addEventListener('click', () => modal.classList.remove('active'));