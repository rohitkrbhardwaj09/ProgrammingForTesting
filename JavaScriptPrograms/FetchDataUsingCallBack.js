function fetchData(url, callback) {
    const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                callback(null, xhr.responseText);
            } else {
                callback(new Error("Failed to fetch data" + xhr.statusText));
            }
        };
        
        xhr.onerror = function () {
            callback(new Error("Failed to fetch data"));
        };
        
        xhr.send();
    }

//Usage:
fetchData("https://jsonplaceholder.typicode.com/posts/1", function (error, data) {
    if (error) {
        console.error(error);
    } else {
        console.log("Fetched Data:", data);
    }
});
