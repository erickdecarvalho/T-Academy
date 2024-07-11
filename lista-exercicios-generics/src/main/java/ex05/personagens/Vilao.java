package ex05.personagens;

public class Vilao<T> extends Personagem<T> {
    public Vilao(String nome, T id) {
        super(nome, id);
    }

    @Override
    public void fazerAcao() {
        System.out.println(getNome() + " está planejando um plano maligno!");
    }
}
