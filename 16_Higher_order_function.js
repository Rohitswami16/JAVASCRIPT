// Using Callback Functions

// Function to display data
function display(data) {
    console.log("data " + data); // Logs the data to the console
}

// Function to add two numbers and display the result using a callback
function add(a, b, show) {
    let res = a + b; // Calculate the sum
    show(res); // Call the callback function with the result
}

// Call add with numbers and the display function
add(10, 20, display); 
// Output:
// data 30

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------
