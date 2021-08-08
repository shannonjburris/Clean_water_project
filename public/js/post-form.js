const submitNewPostForm = async (event) => {
    event.preventDefault();    
    
    
  
        const title = document.querySelector('#form-title').value.trim();
        const body = document.querySelector('#form-body').value.trim();   
        const location = document.querySelector('#dropdown').value;
             

        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({title, body, location}),
            headers: { 'Content-Type' : 'application/json'}
        });

        if(response.ok){
            console.log("Post Created");
            // if the post is created the user is sent back to his dashboard
            document.location.reload();
        }else{
            alert(response.statusText);
        }

  
}
const submitForm = document.getElementById('new-post-form').
addEventListener('submit', submitNewPostForm);

