$(document).ready(function () {
console.log('we ready')
   

    var database = firebase.database();
    var provider = new firebase.auth.FacebookAuthProvider();
    
    function fbLogin() {
        console.log('hello')
        // firebase.auth().signInWithRedirect(provider);
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });

    }    


    function testing() {
        console.log('facebook')
    }

    $('body').on('click', '#facebookBtn', fbLogin)    
})