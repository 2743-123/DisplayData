async function getpost(params) {
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        let data =await response.json();
        document.getElementById('post-title').innerText = data.title;
        document.getElementById('post-body').innerText = data.body;
    }catch(error){
        console.log('Error Fetching data',error)


    }
    
}
getpost();