(async () => {
    console.log("Content script has been injected and executed.");

    // Create a new div element
    var newDiv = document.createElement("div"); 
    newDiv.style.position = "fixed";
    newDiv.style.zIndex = "1000";
    newDiv.style.top = "0";
    newDiv.style.left = "0";
    newDiv.style.right = "0";
    newDiv.style.backgroundColor = "white";
    newDiv.style.border = "1px solid black";
    newDiv.style.padding = "10px";


    let token = await chrome.storage.local.get(['token']).then((result) => result.token);
    console.log("Token:", token);
    let jwtToken = 'your-jwt-token';
    await chrome.storage.local.set({token: jwtToken}, function() {
        console.log('Token is stored in local storage');
      });
    token = await chrome.storage.local.get(['token']).then((result) => result.token);
    console.log("Token:", token);

    // Create a new text node
    var newText = document.createTextNode(`This is a popup inside the page. The URL of the current tab is: ${window.location.href}, token: ${token}`); 

    // Add the text node to the newly created div
    newDiv.appendChild(newText);

    // Add the newly created element and its content into the DOM 
    document.body.appendChild(newDiv);

    setTimeout(() => {
        newDiv.remove();
    }, 3000);

    function saveBookmark() {
        console.log("Bookmark saved.");
    }
})();
