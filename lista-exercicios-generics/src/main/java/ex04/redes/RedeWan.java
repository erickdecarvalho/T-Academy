package ex04.redes;

import ex04.redes.Rede;

public class RedeWan<T> extends Rede<T> {
    @Override
    public void operarRede() {
        super.operarRede();
        System.out.println("Operando como uma Rede de Longa Distância (WAN).");
    }
}
