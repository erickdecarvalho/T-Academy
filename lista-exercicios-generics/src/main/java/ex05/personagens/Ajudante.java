package ex05.personagens;

public class Ajudante<T> extends Personagem<T> {
    public Ajudante(String nome, T id) {
        super(nome, id);
    }

    @Override
    public void fazerAcao() {
        System.out.println(getNome() + " está ajudando o herói!");
    }
}
