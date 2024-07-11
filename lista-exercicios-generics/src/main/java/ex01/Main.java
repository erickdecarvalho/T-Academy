package ex01;

public class Main {
    public static void main(String[] args) {
        Fila<Integer> filaInteiros = new Fila<>();
        filaInteiros.enfileirar(5);
        filaInteiros.enfileirar(10);
        filaInteiros.enfileirar(15);
        filaInteiros.enfileirar(20);

        System.out.println("Fila Inteiros: " + filaInteiros);

        filaInteiros.desenfileirar();
        System.out.println("Fila após desenfileirar: " + filaInteiros);

        System.out.println("A fila está vazia ? " + filaInteiros.estaVazia());
    }
}
