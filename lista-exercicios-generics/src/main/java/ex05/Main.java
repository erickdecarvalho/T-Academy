package ex05;

import ex05.personagens.Ajudante;
import ex05.personagens.Heroi;
import ex05.personagens.Vilao;

public class Main {
    public static void main(String[] args) {
        Jogo<Integer> jogo = new Jogo<>();

        Heroi<Integer> heroi = new Heroi<>("Batman", 1);
        Vilao<Integer> vilao = new Vilao<>("Coringa", 2);
        Ajudante<Integer> ajudante = new Ajudante<>("Robin", 3);

        jogo.adicionarPersonagem(heroi);
        jogo.adicionarPersonagem(vilao);
        jogo.adicionarPersonagem(ajudante);

        jogo.listarPersonagens();

        jogo.removerPersonagem(2);

        jogo.listarPersonagens();
    }
}

