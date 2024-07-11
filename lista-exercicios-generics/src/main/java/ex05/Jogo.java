package ex05;

import ex05.personagens.Personagem;

import java.util.ArrayList;

public class Jogo<T> {
    private ArrayList<Personagem<T>> personagens;

    public Jogo() {
        this.personagens = new ArrayList<>();
    }

    public void adicionarPersonagem(Personagem<T> personagem) {
        personagens.add(personagem);
        System.out.println("Personagem adicionado: " + personagem);
    }

    public void removerPersonagem(T id) {
        Personagem<T> personagem = buscarPersonagemPorId(id);
        if (personagem != null) {
            personagens.remove(personagem);
            System.out.println("Personagem removido: " + personagem);
        } else {
            System.out.println("Personagem com ID " + id + " não encontrado.");
        }
    }

    public Personagem<T> buscarPersonagemPorId(T id) {
        for (Personagem<T> personagem : personagens) {
            if (personagem.getId().equals(id)) {
                return personagem;
            }
        }
        return null;
    }

    public void listarPersonagens() {
        System.out.println("Lista de personagens:");
        for (Personagem<T> personagem : personagens) {
            System.out.println(personagem);
        }
    }
}
