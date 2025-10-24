// DOM elements
const balance = document.getElementById('balance');
const incomeEl = document.getElementById('income');
const expensesEl = document.getElementById('expenses');
const list = document.getElementById('transaction-list');
const form = document.getElementById('form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');

// Get transactions from local storage, or initialize empty array
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// Function 1: Add Transaction
function addTransaction(e) {
    e.preventDefault(); // Stop form from submitting normally

    // Simple validation
    if (descriptionInput.value.trim() === '' || amountInput.value.trim() === '') {
        alert('Please enter a description and an amount.');
        return;
    }

    const transaction = {
        id: generateID(),
        description: descriptionInput.value,
        // Convert amount to a number
        amount: +amountInput.value 
    };

    transactions.push(transaction);
    addTransactionToDOM(transaction);
    updateValues();
    updateLocalStorage();

    // Clear form fields
    descriptionInput.value = '';
    amountInput.value = '';
}

// Function to generate a random ID
function generateID() {
    return Math.floor(Math.random() * 1000000);
}

// Function 2: Add Transaction to DOM List
function addTransactionToDOM(transaction) {
    // Determine the class (income or expense)
    const sign = transaction.amount < 0 ? 'expense' : 'income';

    const item = document.createElement('tr');
    item.classList.add(sign);

    // Format the amount for display
    const formattedAmount = Math.abs(transaction.amount).toFixed(2);
    const amountDisplay = transaction.amount < 0 ? `$ -${formattedAmount}` : `$${formattedAmount}`;
    
    // Get current date for the table
    const currentDate = new Date().toLocaleDateString('en-CA'); // 'en-CA' gives YYYY-MM-DD format

    item.innerHTML = `
        <td>${currentDate}</td>
        <td>${transaction.description}</td>
        <td>${amountDisplay}</td>
        <td>
            <button class="delete-btn" onclick="removeTransaction(${transaction.id})">X</button>
        </td>
    `;

    list.appendChild(item);
}

// Function 3: Update the Balance, Income, and Expenses
function updateValues() {
    const amounts = transactions.map(transaction => transaction.amount);

    // Calculate Total Balance
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    // Calculate Income (positive amounts)
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    // Calculate Expenses (negative amounts, then make positive for display)
    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);

    // Update the DOM
    balance.innerText = `$${total}`;
    incomeEl.innerText = `$${income}`;
    expensesEl.innerText = `$${expense}`;
}

// Function 4: Remove Transaction by ID
function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    updateLocalStorage();
    init(); // Re-initialize to update the list and values
}

// Function 5: Update Local Storage
function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Function 6: Initialize app (clear list and re-render)
function init() {
    list.innerHTML = ''; // Clear the current list
    transactions.forEach(addTransactionToDOM);
    updateValues();
}

// 7. Event Listeners and Initial Load
form.addEventListener('submit', addTransaction);

// Load the transactions when the page first loads
init();