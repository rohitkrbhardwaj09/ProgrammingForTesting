async function fetchDataAsync(url) {
    try{
        const response = await fetch(url);

        if(!response.ok){
            throw new Error('Failed to fetch data: '+ response.statusText)
        }

        return await response.text();
    }catch(error){
        throw new Error('Failed to fetch data')
    }
}

//usage: 

(async () => {
    try {
        const data = await fetchDataAsync("https://jsonplaceholder.typicode.com/posts/1")
        console.log('Fetched data: ', data);
    } catch (error) {
        console.error(error);
    }
})();