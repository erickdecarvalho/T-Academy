package banco;

import java.util.ArrayList;
import java.util.List;

public class Account {
    private double balance;
    private List<Transaction> transactions;
    private int accountId;

    public Account(int accountId, double initialBalance) {
        this.balance = initialBalance;
        this.transactions = new ArrayList<>();
        this.accountId = accountId;
    }

    public synchronized double getBalance() {
        return balance;
    }

    public synchronized void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            transactions.add(new Transaction("Depósito", amount));
        }
    }

    public synchronized void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            transactions.add(new Transaction("Retirada", amount));
        }
    }

    public synchronized void transfer(Account target, double amount) {
        if (amount > 0 && amount <= balance) {
            this.withdraw(amount);
            target.deposit(amount);
            transactions.add(new Transaction("Transferência para ID " + target.getAccountId(), amount));
        }
    }

    public synchronized void listTransactions() {
        for (Transaction transaction : transactions) {
            System.out.println(transaction);
        }
    }

    public int getAccountId() {
        return accountId;
    }
}
