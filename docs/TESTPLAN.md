# COBOL Student Account System Test Plan

This test plan covers all business logic implemented in the current COBOL application. Use this plan to validate the system with business stakeholders and as a basis for future unit and integration tests in Node.js.

| Test Case ID | Test Case Description | Pre-conditions | Test Steps | Expected Result | Actual Result | Status (Pass/Fail) | Comments |
|--------------|----------------------|----------------|------------|-----------------|--------------|--------------------|----------|
| TC01 | View account balance | Account exists with initial balance | 1. Start app<br>2. Select 'View Balance' | Current balance is displayed correctly |  |  |  |
| TC02 | Credit account with valid amount | Account exists | 1. Start app<br>2. Select 'Credit Account'<br>3. Enter positive amount | Amount is added to balance; new balance displayed |  |  |  |
| TC03 | Debit account with valid amount | Account exists; balance >= debit amount | 1. Start app<br>2. Select 'Debit Account'<br>3. Enter amount ≤ balance | Amount is subtracted from balance; new balance displayed |  |  |  |
| TC04 | Debit account with amount greater than balance | Account exists; balance < debit amount | 1. Start app<br>2. Select 'Debit Account'<br>3. Enter amount > balance | Error message: 'Insufficient funds'; balance unchanged |  |  |  |
| TC05 | Credit account with negative amount | Account exists | 1. Start app<br>2. Select 'Credit Account'<br>3. Enter negative amount | Amount is added to balance (business rule allows negative credit) |  |  |  |
| TC06 | Debit account with negative amount | Account exists | 1. Start app<br>2. Select 'Debit Account'<br>3. Enter negative amount | Amount is subtracted from balance (business rule allows negative debit) |  |  |  |
| TC07 | Exit application | App running | 1. Select 'Exit' from menu | Application terminates with exit message |  |  |  |
| TC08 | Invalid menu selection | App running | 1. Enter invalid menu option | Error or prompt for valid selection; no operation performed |  |  |  |

> Note: "Actual Result", "Status", and "Comments" columns are to be filled during test execution.
