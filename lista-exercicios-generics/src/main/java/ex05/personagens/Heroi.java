package ex05.personagens;

public class Heroi<T> extends Personagem<T> {
    public Heroi(String nome, T id) {
        super(nome, id);
    }

    @Override
    public void fazerAcao() {
        System.out.println(getNome() + " está lutando contra o mal!");
    }
}
