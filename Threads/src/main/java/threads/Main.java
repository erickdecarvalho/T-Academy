package threads;

public class Main {
    public static void main(String[] args) {
        Thread[] threads = new Thread[4];

        for (int i = 0; i < 4; i++) {
            DownloadTask task = new DownloadTask();
            task.setName("threads.DownloadTask-" + (i + 1));
            threads[i] = task;
            task.start();
        }

        for (Thread thread : threads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                System.out.println("A thread principal foi interrompida.");
            }
        }

        System.out.println("Todas as tarefas de download foram concluídas.");
    }
}
