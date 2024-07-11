package ex02;

import ex01.Fila;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Familia<String> familia = new Familia<>();

        familia.adicionarPai("João");
        familia.adicionarPai("Maria");

        familia.adicionarFilho("Pedro");

        System.out.println(familia.mostarFilhos());
    }
}
