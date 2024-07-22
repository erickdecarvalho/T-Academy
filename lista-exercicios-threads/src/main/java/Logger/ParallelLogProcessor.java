package Logger;

import Logger.LogProcessor;

import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class ParallelLogProcessor {
    private final int numThreads;

    public ParallelLogProcessor(int numThreads) {
        this.numThreads = numThreads;
    }

    public int processLogs(List<String> filePaths, String searchWord) throws InterruptedException, ExecutionException {
        ExecutorService executor = Executors.newFixedThreadPool(numThreads);
        int totalOccurrences = 0;

        try {
            for (String filePath : filePaths) {
                Callable<Integer> task = new LogProcessor(filePath, searchWord);
                Future<Integer> future = executor.submit(task);
                totalOccurrences += future.get();
            }
        } finally {
            executor.shutdown();
        }

        return totalOccurrences;
    }
}
