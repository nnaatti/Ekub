
var acc = document.getElementById("acc");
acc.addEventListener("click", displayDetails);
// display row 
var row = 1;
// array to store the elements 
var name_ = [];
var amount_ = [];

// function to store the elements 
function displayDetails() {
    var name = document.getElementById("name").value;
    var amount = document.getElementById("amount").value;



    if(!name || !amount) {
        alert("please fill the info");
        return;
    }
    // push in to the array 
    name_.push(name);
    amount_.push(amount);


    // check if the elements are stored 
    for( let a in name_){
        console.log(name_[a]);
    }
    for( let a in amount_){
        console.log(amount_[a]);
    }


    // display the elements 
    var display = document.getElementById("display");
    var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerHTML = name;
    cell2.innerHTML = amount;
    row++; 

  

// shuffle the elements 
var shuffle = document.getElementById("shuffle");
shuffle.addEventListener("click", displayShuffle);

// function to shuffle the elements 
function displayShuffle () {
    const suf = Math.floor(Math.random() * name_.length);
    var lottary = name_[suf];

    console.log(lottary);

    var start = document.getElementById("start");
    start.innerHTML = lottary;
} 



}