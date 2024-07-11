package ex04.redes;

import ex04.componentes.ComponenteRede;

import java.util.ArrayList;

public class Rede<T> {
    private ArrayList<ComponenteRede<T>> componentes;

    public Rede() {
        this.componentes = new ArrayList<>();
    }

    public void adicionarComponente(ComponenteRede<T> componente) {
        componentes.add(componente);
        System.out.println("Componente adicionado: " + componente);
    }

    public void removerComponente(ComponenteRede<T> componente) {
        componentes.remove(componente);
        System.out.println("Componente removido: " + componente);
    }

    public void comunicar(T idOrigem, T idDestino, String mensagem) {
        ComponenteRede<T> origem = buscarComponentePorId(idOrigem);
        ComponenteRede<T> destino = buscarComponentePorId(idDestino);
        if (origem != null && destino != null) {
            System.out.println(origem.getNome() + " enviou a mensagem para " + destino.getNome() + ": " + mensagem);
        } else {
            System.out.println("Falha na comunicação: Componente(s) não encontrado(s).");
        }
    }

    private ComponenteRede<T> buscarComponentePorId(T id) {
        for (ComponenteRede<T> componente : componentes) {
            if (componente.getId().equals(id)) {
                return componente;
            }
        }
        return null;
    }

    public void operarRede() {
        for (ComponenteRede<T> componente : componentes) {
            componente.operar();
        }
    }
}