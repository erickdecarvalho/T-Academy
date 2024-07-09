package resolucao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.LinkedHashMap;

public class Main {
    private static final Map<String, Aluno> alunos = new HashMap<String, Aluno>();

    public static void main(String[] args) {

        // Exercício 01
        alunos.put("João", new Aluno("João", 8.9));
        alunos.put("Pedro", new Aluno("Pedro", 5.4));
        alunos.put("Maria", new Aluno("Maria", 10.0));
        alunos.put("Maria", new Aluno("Adalberto", 6.5));
        alunos.put("Roberta", new Aluno("Roberta", 7.5));
        alunos.put("Rodrigo", new Aluno("Rodrigo", 3.0));
        System.out.println(alunos.toString());

        // Exercício 02
        System.out.println(exibirNotaDoAluno("Rodrigo"));
        System.out.println(listarAlunosComNotaMaiorQue(6.5));

        // Exercício 03
        System.out.println("\nMap Antes da Remoção: ");
        System.out.println(alunos.toString());
        removerAlunosComNotaMenorQue(5.4);
        System.out.println("\nMap Depois da Remoção: ");
        System.out.println(alunos.toString());

        // Exercício 04
        System.out.println(obterMapaDeAlunosOrdenadoPorNota());

        // Exercício 05
        System.out.println(agruparAlunosPorFaixaDeNota());
    }

    private static double exibirNotaDoAluno(String nomeDoAluno) {
        Aluno aluno = alunos.get(nomeDoAluno);

        if (aluno != null) {
            return aluno.getNota();
        } else {
            System.out.println("Não foi possível encontrar o aluno.");
            return  0;
        }

    }

    private static List<String> listarAlunosComNotaMaiorQue(double notaMinimaAluno) {
        return alunos.entrySet().stream()
                .filter(entry -> entry.getValue().getNota() > notaMinimaAluno)
                .map(Map.Entry::getKey)
                .toList();
    }

    private static List<Aluno> removerAlunosComNotaMenorQue(double notaMinima) {
        List<Aluno> alunosRemovidos = alunos.entrySet().stream()
                .filter(entry -> entry.getValue().getNota() < notaMinima)
                .map(Map.Entry::getValue)
                .toList();

        alunosRemovidos.forEach(aluno -> alunos.remove(aluno.getNome()));

        return alunosRemovidos;
    }

    private static Map<String, Aluno> obterMapaDeAlunosOrdenadoPorNota() {
        return alunos.entrySet().stream()
                .sorted((e1, e2) -> Double.compare(e2.getValue().getNota(), e1.getValue().getNota()))
                .collect(Collectors.toMap(
                        Map.Entry::getKey,
                        Map.Entry::getValue,
                        (e1, e2) -> e1,
                        LinkedHashMap::new
                ));
    }

    private static Map<String, List<Aluno>> agruparAlunosPorFaixaDeNota() {
        return alunos.values().stream()
                .collect(Collectors.groupingBy(aluno -> {
                    double nota = aluno.getNota();
                    if (nota >= 9.0) return "A";
                    if (nota >= 8.0) return "B";
                    if (nota >= 7.0) return "C";
                    if (nota >= 6.0) return "D";
                    if (nota >= 5.0) return "E";
                    return "F";
                }, LinkedHashMap::new, Collectors.toList()));
    }
}