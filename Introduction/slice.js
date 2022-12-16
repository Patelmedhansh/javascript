// slicing  
var name = prompt("Enter Your name ");

var initials = name.slice(0,3);
alert("The first three letter of your name are " + initials);

// tweet character limit using slcing operator 

var tweet = prompt("Tweet here ");

var limit = tweet.slice(0,10) ;

alert(limit) ;