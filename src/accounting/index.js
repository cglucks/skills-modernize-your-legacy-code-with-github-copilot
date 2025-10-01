#!/usr/bin/env node
const readline = require('readline');

let balance = 1000.00;

function getBalance() {
  return parseFloat(balance.toFixed(2));
}

function creditAccount(amount) {
  balance += amount;
  return getBalance();
}

function debitAccount(amount) {
  if (amount > balance) {
    return 'Insufficient funds for this debit.';
  } else {
    balance -= amount;
    return getBalance();
  }
}

function resetBalance() {
  balance = 1000.00;
}

function runMenu(choice) {
  switch (choice.trim()) {
    case '1':
      return `Current balance: ${getBalance()}`;
    case '2':
      return 'Credit operation requires amount input.';
    case '3':
      return 'Debit operation requires amount input.';
    case '4':
      return 'Exiting the program. Goodbye!';
    default:
      return 'Invalid selection. Please enter a number between 1 and 4.';
  }
}

if (require.main === module) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function showMenu() {
    console.log('--------------------------------');
    console.log('Account Management System');
    console.log('1. View Balance');
    console.log('2. Credit Account');
    console.log('3. Debit Account');
    console.log('4. Exit');
    console.log('--------------------------------');
    rl.question('Enter your choice (1-4): ', handleMenu);
  }

  function handleMenu(choice) {
    switch (choice.trim()) {
      case '1':
        console.log(`Current balance: ${getBalance()}`);
        showMenu();
        break;
      case '2':
        rl.question('Enter credit amount: ', (amount) => {
          let credit = parseFloat(amount);
          // Business rule: allow negative credit
          creditAccount(credit);
          console.log(`Amount credited. New balance: ${getBalance()}`);
          showMenu();
        });
        break;
      case '3':
        rl.question('Enter debit amount: ', (amount) => {
          let debit = parseFloat(amount);
          if (debit > balance) {
            console.log('Insufficient funds for this debit.');
          } else {
            // Business rule: allow negative debit
            debitAccount(debit);
            console.log(`Amount debited. New balance: ${getBalance()}`);
          }
          showMenu();
        });
        break;
      case '4':
        console.log('Exiting the program. Goodbye!');
        rl.close();
        break;
      default:
        console.log('Invalid selection. Please enter a number between 1 and 4.');
        showMenu();
        break;
    }
  }

  showMenu();
}

module.exports = {
  getBalance,
  creditAccount,
  debitAccount,
  resetBalance,
  runMenu
};
