package ex03;

public class Main {
    public static void main(String[] args) {

        // Criar um funcionário com cargo do tipo String
        Funcionario<String> funcionario1 = new Funcionario<>("João", "Engenheiro");
        funcionario1.setCargo("Engenheiro Mecânico");

        // Criar um funcionário com cargo do tipo Integer
        Funcionario<Integer> funcionario2 = new Funcionario<>("Maria", 12);
        funcionario2.setCargo(20);

    }
}
