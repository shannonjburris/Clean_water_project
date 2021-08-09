
const redirectToForm = async () =>{
    location.replace('/dashboard/new')
}

document.getElementById('newpost')
.addEventListener('click', redirectToForm);

document.querySelectorAll('.delete-button').forEach(item => {
    item.addEventListener('click', (event) => deletePost(event));
})
