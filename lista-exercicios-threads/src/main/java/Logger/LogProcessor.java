package Logger;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.concurrent.Callable;

public class LogProcessor implements Callable<Integer> {
    private final String filePath;
    private final String searchWord;

    public LogProcessor(String filePath, String searchWord) {
        this.filePath = filePath;
        this.searchWord = searchWord.toLowerCase();
    }

    @Override
    public Integer call() throws Exception {
        int count = 0;
        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            while ((line = reader.readLine()) != null) {
                count += (line.toLowerCase().split(searchWord, -1).length - 1);
            }
        }
        return count;
    }
}
