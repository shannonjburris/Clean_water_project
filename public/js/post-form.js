const submitNewPostForm = async (event) => {
    event.preventDefault();    
    
        const title     = document.querySelector('#form-title').value.trim();
        const body      = document.querySelector('#form-body').value.trim();   
        const location  = document.querySelector('#dropdown').value;
        let photo       = document.getElementById("photo").files[0];
             
        const form = new FormData()
        form.append('title', title)
        form.append('location', location)
        form.append('body', body)
        form.append('image', photo)
        //Trying to pass the file in the body??
        const response = await fetch('/api/post', {
            method: 'POST',
            body: form,
            headers: { 'Content-Type' : 'application/json'}
        });

        if(response.ok){
            // if the post is created the user is sent back to his dashboard
            document.location.replace('/dashboard');
        }else{
            alert(response.statusText);
        }

  
}
const submitForm = document.getElementById('new-post-form').
addEventListener('submit', submitNewPostForm);