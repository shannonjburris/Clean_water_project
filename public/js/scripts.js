
const redirectToForm = async () =>{
    location.replace('/dashboard/new')
}

const deletePost = async (event) => {
    event.preventDefault();

        const id = event.target.id;
        const deletePost = await fetch(`/api/post/${id}`, {
            method: 'DELETE'
        })

        if(deletePost.ok){
            document.location.replace('/dashboard')
        }else{
            alert('Failed to Delete Post')
        }
    
}

const openForm = document.getElementById('newpost')
.addEventListener('click', redirectToForm);

document.querySelectorAll('.delete-button').forEach(item => {
    item.addEventListener('click', (event) => deletePost(event));
})