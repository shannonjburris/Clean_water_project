const updatePost = async (event) =>{
    event.preventDefault();

    const id= event.target.id;

    const update = await fetch(`api/post/${id}`, {
        method: 'PUT'
    })

    if(update.ok){
        document.location.reload();
    }else{
        alert("Update failed")
    }
}



document.querySelectorAll(".update-btn").forEach(item =>
item.addEventListener('click', (event) =>updatePost(event)));




