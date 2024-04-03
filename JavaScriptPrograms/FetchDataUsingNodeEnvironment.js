const { error } = require('console');
const http = require('https')

function fetchData(url, callback) {
    http.get(url, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            callback(null, data);
        });
    }).on('error', (error) => {
        callback(error)
    });
}

//usage:
fetchData('https://jsonplaceholder.typicode.com/posts/1', (error, data) => {
    if(error){
        console.error(error);
    }else{
        console.log("Fetched Data: ", data);
    }
})