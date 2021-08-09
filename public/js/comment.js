const submitCommentForm = async (event) => {
    event.preventDefault();

    const body = document.querySelector('#comment-form').value.trim();
    const id = document.querySelector('.comment-submit').getAttribute('id');

    const response = await fetch('/api/comment/' + id, {
        method: 'POST',
        body: JSON.stringify({ body }),
        headers: { 'Content-Type': 'application/json' }
    })

    if(response.ok){
        document.location.reload();
        // console.log('Comment Added');
    }else{
        alert(response.statusText);
    }

}




const submitComment = document.getElementById('comment-button').
    addEventListener('submit', submitCommentForm)