package br.com.dbccompany.LandingPageDbc.Utils;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class Cryptography {

    public static String md5 (String password){

        if(password == null) return null;

        String md5 = null;
        try{
            MessageDigest digest = MessageDigest.getInstance("MD5");

            digest.update(password.getBytes(), 0, password.length());

            BigInteger hash = new BigInteger(1, digest.digest());

            md5 = String.format("%32x", hash);

        } catch (NoSuchAlgorithmException e) {
            System.err.println("ERROR CRYPTOGRAPHY!!");
            return  null;
        }
        return md5;
    }

}

