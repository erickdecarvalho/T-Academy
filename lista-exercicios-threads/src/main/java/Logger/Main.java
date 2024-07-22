package Logger;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.concurrent.ExecutionException;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<String> logFiles = Arrays.asList(
                "src\\main\\java\\Logger\\logs\\logFile1.log",
                "src\\main\\java\\Logger\\logs\\logFile2.log",
                "src\\main\\java\\Logger\\logs\\logFile3.log"
        );

        System.out.println("Digite a palavra: ");
        String wordSearch = scanner.nextLine();

        try {
            ParallelLogProcessor processor = new ParallelLogProcessor(5);

            int totalOccurrences = processor.processLogs(logFiles, wordSearch);

            System.out.println("Total de ocorrências encontradas de \"" + wordSearch + "\": " + totalOccurrences);
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
    }
}
