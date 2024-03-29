package br.com.dbccompany.LandingPageDbc.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

@Controller
@RequestMapping("/api/email")
public class SendEmailController {

    @PostMapping(value = "/{email}")
    @ResponseBody
    public void sendMail(@PathVariable String email) {
        // Recipient's email ID needs to be mentioned.
        String to = email;

        // Sender's email ID needs to be mentioned
        String from = "vemserdbc@gmail.com";
        String psw = "vemser123";

        // different mail will have different host name, I have implemented using gmail
        String host = "smtp.gmail.com";
        String port = "587";

        Properties props = System.getProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.host", host);
        props.put("mail.smtp.port", port);
        // props.put("mail.smtp.connectiontimeout", timeout);
        props.put("mail.smtp.auth", true);
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.starttls.required", "true");

        // Get the default Session object.
        //Session session = Session.getDefaultInstance(props);

        Session session = Session.getInstance(props, new javax.mail.Authenticator()
        {
            protected PasswordAuthentication getPasswordAuthentication()
            {
                return new PasswordAuthentication(from, psw);
            }
        });

        try {
            // Create a default MimeMessage object.
            MimeMessage message = new MimeMessage(session);

            // Set From: header field of the header.
            message.setFrom(new InternetAddress(from));

            // Set To: header field of the header.
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));

            // Set Subject: header field
            message.setSubject("[Vem Ser DBC] Você foi selecionado para participar da primeira etapa de seleção!\n");

            // Now set the actual message
            message.setText("Olá!\n" +
                    "\n" +
                    " \n" +
                    "\n" +
                    "Parabéns! Você foi pré-selecionado para a primeira etapa de seleção do Vem Ser DBC," +
                    " que consiste na realização da prova técnica. \\o/" +
                    " \n" +
                    "\n" +
                    "Entre no site do Vem Ser DBC com seu Login e confirme sua presença.");

            // Send message
            Transport.send(message);
            System.out.println("Sent message successfully....");
        } catch (MessagingException mex) {
            mex.printStackTrace();
        }
    }

    @PostMapping(value = "/reject/{email}")
    @ResponseBody
    public void sendMailRejected(@PathVariable String email) {
        // Recipient's email ID needs to be mentioned.
        String to = email;

        // Sender's email ID needs to be mentioned
        String from = "vemserdbc@gmail.com";
        String psw = "vemser123";

        // different mail will have different host name, I have implemented using gmail
        String host = "smtp.gmail.com";
        String port = "587";

        Properties props = System.getProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.host", host);
        props.put("mail.smtp.port", port);
        // props.put("mail.smtp.connectiontimeout", timeout);
        props.put("mail.smtp.auth", true);
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.starttls.required", "true");

        // Get the default Session object.
        //Session session = Session.getDefaultInstance(props);

        Session session = Session.getInstance(props, new javax.mail.Authenticator()
        {
            protected PasswordAuthentication getPasswordAuthentication()
            {
                return new PasswordAuthentication(from, psw);
            }
        });

        try {
            // Create a default MimeMessage object.
            MimeMessage message = new MimeMessage(session);

            // Set From: header field of the header.
            message.setFrom(new InternetAddress(from));

            // Set To: header field of the header.
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));

            // Set Subject: header field
            message.setSubject("[Vem Ser DBC] Infelizmente você não foi selecionado para participar do projeto desta edição.\n");

            // Now set the actual message
            message.setText("Olá!\n" +
                    "\n" +
                    " \n" +
                    "\n" +
                    "Infelizmente você não foi pré-selecionado para esta edição do Vem Ser DBC," +
                    " Mas não desanime! \\o/" +
                    " \n" +
                    "\n" +
                    "Você é bem-vindo para de candidatar para as próximas.");

            // Send message
            Transport.send(message);
            System.out.println("Sent message successfully....");
        } catch (MessagingException mex) {
            mex.printStackTrace();
        }
    }

}