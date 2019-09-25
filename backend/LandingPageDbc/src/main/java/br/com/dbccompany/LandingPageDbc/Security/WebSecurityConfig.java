package br.com.dbccompany.LandingPageDbc.Security;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.headers().frameOptions().sameOrigin().and()
                .csrf().disable().authorizeRequests()
                .antMatchers(HttpMethod.POST, "/api/admin/add").permitAll()
                .antMatchers(HttpMethod.POST, "/api/admin/login").permitAll()
                .antMatchers(HttpMethod.POST, "/api/candidate/login").permitAll()
                .antMatchers(HttpMethod.GET, "/api/candidate/login").permitAll()
                .antMatchers(HttpMethod.POST, "/login").permitAll()
                .antMatchers(HttpMethod.POST, "/api/candidate/add").permitAll()
                .antMatchers(HttpMethod.POST, "/api/question/add").permitAll()
                .antMatchers(HttpMethod.POST, "/api/address/add").permitAll()
                .antMatchers(HttpMethod.POST, "/api/neighborhood/add").permitAll()
                .antMatchers(HttpMethod.POST, "/api/city/add").permitAll()
                .antMatchers(HttpMethod.POST, "/api/state/add").permitAll()
                .antMatchers(HttpMethod.POST, "/api/country/add").permitAll()
                .antMatchers(HttpMethod.POST, "/api/email/*").permitAll()
                .antMatchers(HttpMethod.GET, "/api/question/").permitAll()
                .antMatchers(HttpMethod.GET, "/api/address/").permitAll()
                .antMatchers(HttpMethod.GET, "/api/neighborhood/").permitAll()
                .antMatchers(HttpMethod.GET, "/api/city/").permitAll()
                .antMatchers(HttpMethod.GET, "/api/state/").permitAll()
                .antMatchers(HttpMethod.GET, "/api/country/").permitAll()
                //.antMatchers(HttpMethod.PUT, "/api/candidate/edit/*").permitAll()
                .anyRequest().authenticated()
                .and().cors()
                .and()
                .addFilterBefore(new JWTLoginFilter("/login", authenticationManager()), UsernamePasswordAuthenticationFilter.class)
                .addFilterBefore(new JWTAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser("teste@dbccompany.com.br")
                .password("{noop}1234")
                .roles("ADMIN");
    }
}