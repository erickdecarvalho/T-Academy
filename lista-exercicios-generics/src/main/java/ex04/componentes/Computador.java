package ex04.componentes;

public class Computador<T> extends ComponenteRede<T> {
    public Computador(String nome, T id) {
        super(nome, id);
    }

    @Override
    public void operar() {
        System.out.println(getNome() + " está operando como um Computador.");
    }
}
