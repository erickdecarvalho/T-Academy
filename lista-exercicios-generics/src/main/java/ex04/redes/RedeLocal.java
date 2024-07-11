package ex04.redes;

import ex04.redes.Rede;

public class RedeLocal<T> extends Rede<T> {
    @Override
    public void operarRede() {
        super.operarRede();
        System.out.println("Operando como uma Rede Local (LAN).");
    }
}
