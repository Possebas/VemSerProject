package br.com.dbccompany.LandingPageDbc.Utils;

public class Validation {

    public static boolean phoneValid( String telefone ){
        return telefone.matches("((\\d){8,12}|(\\+(\\d{13})))");
    }

    public static boolean emailValid( String email ){
        return email.matches("(\\w)+((\\.|(_)|(-))(\\w)+)*(@)(\\w)+((\\.)(\\w)+)+");
    }

    public static boolean cpfValid( String cpf ){
        return cpf.matches("(\\d){11}");
    }

}