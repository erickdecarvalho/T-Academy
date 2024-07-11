package ex01;

import java.util.LinkedList;

public class Fila<T> {
    private LinkedList<T> lista;

    public Fila() {
        lista = new LinkedList<>();
    }

    public void enfileirar(T elemento) {
        lista.addLast(elemento);
    }

    public T desenfileirar() {
        if (estaVazia()) {
            throw new RuntimeException("A fila está vazia. Não é possível desenfileirar.");
        }
        return lista.removeFirst();
    }

    public boolean estaVazia() {
        return lista.isEmpty();
    }

    @Override
    public String toString() {
        return "Fila{" +
                "lista=" + lista +
                '}';
    }
}
