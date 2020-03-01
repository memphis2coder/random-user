// api endpoint
const url = 'https://randomuser.me/api/';
// DOM elements
var user = document.getElementById('user').value;

fetch(url) // Call the fetch function passing the url of the API as a parameter
    .then((resp) => resp.json())
    .then(function (data) {
        // Your code for handling the data you get from the API
        let users = data.results; // Get the results
        return users.map(function (user) { // Map through the results and for each run the code below
            let picture = document.getElementById('user-photo').src = user.picture.large;
            let userName = document.getElementById('user-name').innerHTML = user.name.first + " " + user.name.last;
            
            // locate your element and add the Click Event Listener
            document.getElementById("values-list").addEventListener("click",function(e) {
            // e.target is our targetted element.
            console.log(user.name.first + " " + user.name.last);
    });
        })

    })
    .catch(function (error) {
        // This is where you run code if the server returns any errors
        console.log(error)
    });


// tasks
// *) Add a click event
// *) dyanmically replace user-title and user-name
// *) update user-title
// *) update user-name
// *) update both when I hover over font-awesome icons



