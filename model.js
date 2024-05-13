document.addEventListener('DOMContentLoaded', function () {
    const addBtn = document.getElementById('add_btn');
    const expenseTableBody = document.getElementById('expense-table-body');
    const totalAmountCell = document.getElementById('total-amount');

    // Array to store expenses and incomes
    let transactions = [];

    // Function to add a new transaction
    function addTransaction() {
        const category = document.getElementById('category_select').value;
        const amount = parseFloat(document.getElementById('amount_input').value);
        const info = document.getElementById('info').value;
        const date = document.getElementById('date_input').value;

        // Add transaction to array
        transactions.push({ category, amount, info, date });

        // Update the table
        updateTable();

        // Calculate and display total
        calculateTotal();
    }

    // Function to update the table
    function updateTable() {
        // Clear table body
        expenseTableBody.innerHTML = '';

        // Add rows to the table
        transactions.forEach(transaction => {
            const row = `
                <tr>
                    <td>${transaction.category}</td>
                    <td>${transaction.amount}</td>
                    <td>${transaction.info}</td>
                    <td>${transaction.date}</td>
                    <td><button class="delete-btn">Delete</button></td>
                </tr>
            `;
            expenseTableBody.innerHTML += row;
        });

        // Add event listener for delete buttons
        const deleteBtns = document.querySelectorAll('.delete-btn');
        deleteBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                const index = Array.from(deleteBtns).indexOf(btn);
                transactions.splice(index, 1);
                updateTable();
                calculateTotal();
            });
        });
    }

    // Function to calculate total amount
    function calculateTotal() {
        const total = transactions.reduce((acc, curr) => acc + curr.amount, 0);
        totalAmountCell.textContent = total.toFixed(2);
    }

    // Add event listener for add button
    addBtn.addEventListener('click', addTransaction);
});
