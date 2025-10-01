const { runMenu, creditAccount, debitAccount, getBalance, resetBalance } = require('./index');

describe('Account Management System', () => {
  beforeEach(() => {
    resetBalance();
  });

  test('TC01: View account balance', () => {
    expect(getBalance()).toBe(1000.00);
  });

  test('TC02: Credit account with valid amount', () => {
    creditAccount(200);
    expect(getBalance()).toBe(1200.00);
  });

  test('TC03: Debit account with valid amount', () => {
    debitAccount(400);
    expect(getBalance()).toBe(600.00);
  });

  test('TC04: Debit account with amount greater than balance', () => {
    expect(debitAccount(1200)).toBe('Insufficient funds for this debit.');
    expect(getBalance()).toBe(1000.00);
  });

  test('TC05: Credit account with negative amount', () => {
    creditAccount(-500);
    expect(getBalance()).toBe(500.00);
  });

  test('TC06: Debit account with negative amount', () => {
    debitAccount(-200);
    expect(getBalance()).toBe(1200.00);
  });

  test('TC08: Invalid menu selection', () => {
    expect(runMenu('invalid')).toBe('Invalid selection. Please enter a number between 1 and 4.');
  });
});
