package ex04.componentes;

public class Roteador<T> extends ComponenteRede<T> {
    public Roteador(String nome, T id) {
        super(nome, id);
    }

    @Override
    public void operar() {
        System.out.println(getNome() + " está operando como um Roteador.");
    }
}
