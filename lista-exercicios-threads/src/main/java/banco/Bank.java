package banco;

import java.util.HashMap;
import java.util.Map;

public class Bank {
    private Map<Integer, Account> accounts;
    private int nextAccountId;

    public Bank() {
        this.accounts = new HashMap<>();
        this.nextAccountId = 1;
    }

    public synchronized int createAccount(double initialBalance) {
        Account newAccount = new Account(nextAccountId++, initialBalance);
        accounts.put(newAccount.getAccountId(), newAccount);
        System.out.println("Conta criada com ID: " + newAccount.getAccountId() + " e saldo inicial: " + initialBalance);
        return newAccount.getAccountId();
    }

    public synchronized Account getAccount(int accountId) {
        return accounts.get(accountId);
    }

    public synchronized void deposit(int accountId, double amount) {
        Account account = getAccount(accountId);
        if (account != null) {
            account.deposit(amount);
            System.out.println("Depósito de " + amount + " na conta ID " + accountId);
        } else {
            System.out.println("Conta ID " + accountId + " não encontrada.");
        }
    }

    public synchronized void withdraw(int accountId, double amount) {
        Account account = getAccount(accountId);
        if (account != null) {
            account.withdraw(amount);
            System.out.println("Retirada de " + amount + " da conta ID " + accountId);
        } else {
            System.out.println("Conta ID " + accountId + " não encontrada.");
        }
    }

    public synchronized void transfer(int fromAccountId, int toAccountId, double amount) {
        Account fromAccount = getAccount(fromAccountId);
        Account toAccount = getAccount(toAccountId);
        if (fromAccount != null && toAccount != null) {
            fromAccount.transfer(toAccount, amount);
            System.out.println("Transferência de " + amount + " da conta ID " + fromAccountId + " para a conta ID " + toAccountId);
        } else {
            System.out.println("Conta(s) não encontrada(s).");
        }
    }

    public synchronized void listAllAccountBalances() {
        for (Map.Entry<Integer, Account> entry : accounts.entrySet()) {
            int accountId = entry.getKey();
            Account account = entry.getValue();
            System.out.println("ID da Conta: " + accountId + " - Saldo: " + account.getBalance());
        }
    }

    public synchronized void listTransactionsHistories() {
        for (Map.Entry<Integer, Account> entry : accounts.entrySet()) {
            int accountId = entry.getKey();
            Account account = entry.getValue();
            System.out.println("Histórico de Transações para a Conta ID " + accountId + ":");
            account.listTransactions();
            System.out.println();
        }
    }

}
