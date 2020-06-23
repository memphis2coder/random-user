// api endpoint
const url = 'https://randomuser.me/api/?exc=login/';
// DOM elements
// var person = document.getElementById('user');
// var email = document.getElementById('email');
var title = document.getElementById('user-title');

// set active class on click for icons
function toggleClass(el) {
    var lists = document.getElementById('valuesList').children;
    for (var i = 0; i < lists.length; i++) {
        lists[i].className = "";
    }
    el.className = "active";
};

fetch(url) // Call the fetch function passing the url of the API as a parameter
    .then((resp) => resp.json())
    .then(function (data) {
        // Your code for handling the data you get from the API
        let users = data.results; // Get the results
        return users.map(function (user) { // Map through the results and for each run the code below
            let picture = document.getElementById('user-photo').src = user.picture.large;
            let userName = document.getElementById('user-name').innerHTML = user.name.first + " " + user.name.last;
            let name = document.getElementById('user-name');
            let bday = document.getElementById('bday');

            // locate your element and add the Click Event Listener
            document.getElementById("person").addEventListener("click",function() {
            // person link info
                title.innerHTML = "Hello, My name is";
                name.innerHTML = user.name.first + " " + user.name.last;
                console.log("person has been clicked")
            });
            // email link info
            document.getElementById('email').addEventListener('click', function() {
                title.innerHTML = "My email address is";
                name.innerHTML = user.email;
                console.log("email has been clicked")
            });
            // bday link info
            document.getElementById('bday').addEventListener('click', function() {
                title.innerHTML = "My birthday is";
                let date = user.dob.date;
                let newDate = moment(date).format("M/DD/YYYY");
                name.innerHTML = newDate;
                console.log('birthday has been clicked');
            });
            // address link info
            document.getElementById('address').addEventListener('click', function() {
                console.log("address had been clicked");
                title.innerHTML = "The city I live In";
                name.innerHTML = user.location.city + ", " + user.location.state;
            });
            // phone link info
            document.getElementById('phoneNumber').addEventListener('click', function() {
                console.log("phone had been clicked");
                title.innerHTML = "My phone number is";
                name.innerHTML = user.phone;
            });
        }) // user.map
    }) // .then function (data)

    .catch(function (error) {
        // This is where you run code if the server returns any errors
        console.log(error)
    });


    // reset button to refresh page
    function reload() {
        location.reload(); 
    };
    



