package banco;

public class Main {
    public static void main(String[] args) {
        Bank bank = new Bank();
        int acc1 = bank.createAccount(5000);
        int acc2 = bank.createAccount(750);

        Thread t1 = new CustomerThread(bank, acc1, -1, true, 100);
        Thread t2 = new CustomerThread(bank, acc2, -1, false, 58);
        Thread t3 = new CustomerThread(bank, acc1, acc2, false, 40);
        Thread t4 = new CustomerThread(bank, -1, -1, false, 32);
        Thread t5 = new CustomerThread(bank, acc1, -1, true, 280);
        Thread t6 = new CustomerThread(bank, acc2, -1, false, 105);

        t1.start();
        t2.start();
        t3.start();
        t4.start();
        t5.start();
        t6.start();

        try {
            t1.join();
            t2.join();
            t3.join();
            t4.join();
            t5.join();
            t6.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        bank.listAllAccountBalances();
        bank.listTransactionsHistories();
    }
}