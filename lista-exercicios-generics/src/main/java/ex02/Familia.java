package ex02;

import java.util.ArrayList;
import java.util.LinkedList;

public class Familia<String> {
    ArrayList<String> familia;
    ArrayList<String> filhos;
    ArrayList<String> pais;


    public Familia() {
        familia = new ArrayList<>();
    }

    public void adicionarPai(String nomePai) {
        familia.add(nomePai);
        pais.add(nomePai);
    }

    public void adicionarFilho(String nomeFilho) {
        familia.add(nomeFilho);
        filhos.add(nomeFilho);
    }

    public ArrayList<String> mostarFilhos() {
        return filhos;
    }

}
