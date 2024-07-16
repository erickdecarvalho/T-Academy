package threads;

import java.util.Random;

public class DownloadTask extends Thread {

    private static final Random RANDOM = new Random();
    private static final int PROGRESS_BAR_WIDTH = 50;

    @Override
    public void run() {
        int randomDelay = RANDOM.nextInt(10) + 1;

        long sleepTime = 1000 * randomDelay;

        System.out.println(Thread.currentThread().getName() + " iniciando download... (Tempo de download: " + sleepTime + " ms)");

        long startTime = System.currentTimeMillis();
        long endTime = startTime + sleepTime;

        while (System.currentTimeMillis() < endTime) {
            try {
                int progress = (int) ((System.currentTimeMillis() - startTime) * 100 / sleepTime);

                printProgressBar(progress);

                Thread.sleep(100);
            } catch (InterruptedException e) {
                System.out.println(Thread.currentThread().getName() + " foi interrompido.");
                return;
            }
        }

        System.out.println(Thread.currentThread().getName() + " download concluído.");
    }

    private void printProgressBar(int progress) {
        int completed = (int) (progress / (100.0 / PROGRESS_BAR_WIDTH));
        StringBuilder bar = new StringBuilder("[");
        for (int i = 0; i < PROGRESS_BAR_WIDTH; i++) {
            if (i < completed) {
                bar.append("=");
            } else {
                bar.append(" ");
            }
        }
        bar.append("] ");
        bar.append(progress).append("%");
        System.out.print("\r" + Thread.currentThread().getName() + ": " + bar.toString());
    }

}
