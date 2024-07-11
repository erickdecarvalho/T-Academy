package ex03;

public class Funcionario<T> {
    private String nome;
    private T cargo;

    public Funcionario(String nome, T cargo) {
        this.nome = nome;
        this.cargo = cargo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public T getCargo() {
        return cargo;
    }

    public void setCargo(T cargo) {
        this.cargo = cargo;
    }

    @Override
    public String toString() {
        return "Funcionario{" +
                "nome='" + nome + '\'' +
                ", cargo=" + cargo +
                '}';
    }
}
