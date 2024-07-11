package ex04.componentes;

public abstract class ComponenteRede<T> {
    private String nome;
    private T id;

    public ComponenteRede(String nome, T id) {
        this.nome = nome;
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public T getId() {
        return id;
    }

    public void setId(T id) {
        this.id = id;
    }

    public abstract void operar();

    @Override
    public String toString() {
        return "ComponenteRede{" +
                "nome='" + nome + '\'' +
                ", id=" + id +
                '}';
    }
}
