function fetchDataPromise(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText)
            } else {
                reject(new Error("Failed to fetch data: "+ xhr.statusText))
            }
        }

        xhr.onerror = function() {
            reject(new Error('Failed to fetch data'))
        }

        xhr.send()
    })
}

//usage:
fetchDataPromise("https://jsonplaceholder.typicode.com/posts/1")
.then(data => console.log("Fetched data: "+ data))
.catch(error => console.error(error))