package ex05.personagens;

public abstract class Personagem<T> {
    private String nome;
    private T id;

    public Personagem(String nome, T id) {
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

    public abstract void fazerAcao();

    @Override
    public String toString() {
        return "Personagem{" +
                "nome='" + nome + '\'' +
                ", id=" + id +
                '}';
    }
}
