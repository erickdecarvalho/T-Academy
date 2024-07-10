package org.example;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Main {

    public static void main(String[] args) {
        List<Integer> numeros = Arrays.asList(6, 9, 7, 10, 8, 1, 3, 5, 4, 2);
        List<String> paises = Arrays.asList("Inglaterra", "Alemanha", "Brasil", "França", "Portugal");
        List<Pessoa> pessoas = Arrays.asList(
                new Pessoa("João", 22),
                new Pessoa("Maria", 33),
                new Pessoa("Pedro", 33),
                new Pessoa("Antônia", 21),
                new Pessoa("Renato", 21)
        );

        // Ex 01 -> Filtrar números pares
        List<Integer> numerosPares = numeros.stream()
                .filter(numero -> numero % 2 == 0)
                .collect(Collectors.toList());

        System.out.println("Números pares: " + numerosPares);

        // Ex 02 - Dobrar cada elemento da lista
        List<Integer> numerosDobrados = numeros.stream()
                .map(numero -> numero * 2)
                .collect(Collectors.toList());

        System.out.println("Números dobrados: " + numerosDobrados);

        // Ex 03 - Verificar se todos os elementos da lista são maiores que 10
        boolean todosNumerosSaoMaioresQue10 = numeros.stream()
                .allMatch(n -> n > 10);

        System.out.println("Todos números maiores que 10 ? " + todosNumerosSaoMaioresQue10);

        // Ex 04 - Encontrar o maior número da lista
        Optional<Integer> maiorNumeroDaLista = numeros.stream()
                .max(Integer::compareTo);

        System.out.println("Maior número da lista: " + maiorNumeroDaLista);

        // Ex 05 - Converter uma lista de Strings em maiúsculas
        List<String> paisesComNomesMaiusculos = paises.stream()
                .map(String::toUpperCase)
                .collect(Collectors.toList());

        System.out.println("Países com todos nomes maiúsculos: " + paisesComNomesMaiusculos);

        // Ex 06 - Ordenar uma lista de Strings por tamanho
        List<String> paisesOrdenadosPorTamanhoDoNome = paises.stream()
                .sorted((s1, s2) -> Integer.compare(s1.length(), s2.length()))
                .collect(Collectors.toList());

        System.out.println("Países ordenados pelo tamanho do nome: " + paisesOrdenadosPorTamanhoDoNome);

        // Ex 7 - Agrupar uma lista de pessoas por idade
        Map<Integer, List<Pessoa>> pessoasPorIdade = pessoas.stream()
                .collect(Collectors.groupingBy(Pessoa::getIdade));

        pessoasPorIdade.forEach((idade, listaDasPessoas) -> {
            System.out.println("Idade " + idade + ": " + listaDasPessoas);
        });

        // Ex 8 - Calcular a média dos valores de uma lista
        double mediaDosNumeros = numeros.stream()
                .collect(Collectors.averagingDouble(Integer::intValue));

        System.out.println("Média dos números: " + mediaDosNumeros);

        // Ex 9 - Remover elementos duplicados de uma lista
        List<Integer> listaComElementosDuplicados = Arrays.asList(250, 250, 120, 100, 400, 400, 54);

        List<Integer> listaSemElementosDuplicados = listaComElementosDuplicados.stream()
                .distinct()
                .collect(Collectors.toList());

        System.out.println("Lista sem elementos duplicados: " + listaSemElementosDuplicados);

        // Ex 10 - Combinar duas listas em uma
        List<Object> listaIntercalada = Stream.of(numeros, pessoas)
                .flatMap(List::stream)
                .collect(Collectors.toList());

        System.out.println("Lista intercalada: " + listaIntercalada);
    }
}