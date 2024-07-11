package ex04;

import ex04.componentes.Computador;
import ex04.componentes.Roteador;
import ex04.redes.RedeLocal;

public class Main {
    public static void main(String[] args) {
            RedeLocal<Integer> redeLocal = new RedeLocal<>();

            Computador<Integer> computador1 = new Computador<>("Computador1", 1);
            Computador<Integer> computador2 = new Computador<>("Computador2", 2);
            Roteador<Integer> roteador = new Roteador<>("Roteador1", 100);

            redeLocal.adicionarComponente(computador1);
            redeLocal.adicionarComponente(computador2);
            redeLocal.adicionarComponente(roteador);

            redeLocal.operarRede();

            redeLocal.comunicar(1, 2, "Olá, Computador2!");
            redeLocal.comunicar(2, 100, "Olá, Roteador!");

            redeLocal.removerComponente(computador1);

            redeLocal.operarRede();
    }
}
