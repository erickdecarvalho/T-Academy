package banco;

public class CustomerThread extends Thread {
    private Bank bank;
    private int fromAccountId;
    private int toAccountId;
    private boolean deposit;
    private double amount;

    public CustomerThread(Bank bank, int fromAccountId, int toAccountId, boolean deposit, double amount) {
        this.bank = bank;
        this.fromAccountId = fromAccountId;
        this.toAccountId = toAccountId;
        this.deposit = deposit;
        this.amount = amount;
    }

    @Override
    public void run() {
        try {
            if (deposit) {
                bank.deposit(fromAccountId, amount);
            } else if (fromAccountId > 0 && toAccountId > 0) {
                bank.transfer(fromAccountId, toAccountId, amount);
            } else {
                bank.withdraw(fromAccountId, amount);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
