function addData() {
    // Get input values
    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    let mobile = document.getElementById("numberInput").value;
    let foodName = document.getElementById("food-name-input").value;
    let price = document.getElementById("food-price-input").value;
    let address = document.getElementById("addressInput").value;
    let location = document.getElementById("locationInput").value;
    let pincode = document.getElementById("pincodeInput").value;

    // Get the table and insert a new row at the end
    let table = document.getElementById("outputTable");
    let newRow = table.insertRow(table.rows.length);

    // Insert data into cells of the new row
    newRow.insertCell(0).innerHTML = name;
    newRow.insertCell(1).innerHTML = email;
    newRow.insertCell(2).innerHTML = mobile;
    newRow.insertCell(3).innerHTML = foodName;
    newRow.insertCell(4).innerHTML = price;
    newRow.insertCell(5).innerHTML = address;
    newRow.insertCell(6).innerHTML = location;
    newRow.insertCell(7).innerHTML = pincode;
    newRow.insertCell(8).innerHTML =
        '<button onclick="editData(this)">Edit</button>' +
        '<button onclick="deleteData(this)">Delete</button>';

    // Clear input fields
    clearInputs();
}

function editData(button) {
    currentRow = button.parentElement.parentElement;
    document.getElementById("nameInput").value = currentRow.cells[0].innerText;
    document.getElementById("emailInput").value = currentRow.cells[1].innerText;
    document.getElementById("numberInput").value = currentRow.cells[2].innerText;
    document.getElementById("food-name-input").value = currentRow.cells[3].innerText;
    document.getElementById("food-price-input").value = currentRow.cells[4].innerText;
    document.getElementById("addressInput").value = currentRow.cells[5].innerText;
    document.getElementById("locationInput").value = currentRow.cells[6].innerText;
    document.getElementById("pincodeInput").value = currentRow.cells[7].innerText;

    document.getElementById("saveButton").style.display = "inline-block";
}

function saveEdit() {
    currentRow.cells[0].innerText = document.getElementById("nameInput").value;
    currentRow.cells[1].innerText = document.getElementById("emailInput").value;
    currentRow.cells[2].innerText = document.getElementById("numberInput").value;
    currentRow.cells[3].innerText = document.getElementById("food-name-input").value;
    currentRow.cells[4].innerText = document.getElementById("food-price-input").value;
    currentRow.cells[5].innerText = document.getElementById("addressInput").value;
    currentRow.cells[6].innerText = document.getElementById("locationInput").value;
    currentRow.cells[7].innerText = document.getElementById("pincodeInput").value;

    clearInputs();
    document.getElementById("saveButton").style.display = "none";
}

function deleteData(button) {
    // Get the parent row of the clicked button
    let row = button.parentNode.parentNode;

    // Remove the row from the table
    row.parentNode.removeChild(row);
}

function clearInputs() {
    // Clear input fields
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("numberInput").value = "";
    document.getElementById("addressInput").value = "";
    document.getElementById("locationInput").value = "";
    document.getElementById("pincodeInput").value = "";
}

window.onload = function() {
    // Get the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const foodName = urlParams.get('foodName');
    const foodPrice = urlParams.get('foodPrice');

    // Set the values in the input fields
    if (foodName && foodPrice) {
        document.getElementById('food-name-input').value = foodName;
        document.getElementById('food-price-input').value = foodPrice;
    }
}

