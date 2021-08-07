const submitCommentForm = async (event) =>{
    event.preventDefault();

    const body = document.querySelector('#comment-form').value.trim();
    console.log(event)
    const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({body}),
        headers: { 'Content-Type' : 'application/json' }
    })

    if(response.ok){
        document.location.replace('/dashboard');
    }else{
        alert(response.statusText);
    }

}




const submitComment = document.getElementById('comment-button').
addEventListener('submit', submitCommentForm)