const submitNewPostForm = async (event) => {
    event.preventDefault();    
    
  
        const title = document.querySelector('#form-title').value.trim();
        const body = document.querySelector('#form-body').value.trim();        

        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({title, body}),
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

