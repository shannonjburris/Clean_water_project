
const redirectToForm = async () =>{
    location.replace('/dashboard/new')
}

const openForm = document.getElementById('newpost')
.addEventListener('click', redirectToForm);