package com.mom.backend.jwt;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.security.core.userdetails.User;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.SignatureException;

@Component
public class JwtRequestFilter extends OncePerRequestFilter {
    @Autowired
    private JwtUserDetailsService jwtUserDetailsService;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
        throws ServletException, IOException {

        final String requestTokenHeader = request.getHeader("Authorization");
  
        String username = null;
        String jwtToken = null;
        // JWT Token is in the form "Bearer token". Remove Bearer word and get
        // only the Token
        if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
        	//System.out.println("토큰값="+requestTokenHeader.substring(7));
            jwtToken = requestTokenHeader.substring(7);
            
            try {         	
                  username = jwtTokenUtil.getUsernameFromToken(jwtToken);
            } catch (IllegalArgumentException e) {
            	logger.warn("Unable to get JWT Token", e);
            	return;
            } catch (ExpiredJwtException e) {
            	logger.warn("the token is expired and not valid anymore", e);
            	//throw new JwtException("token expired");
            	response.setHeader("Token-expired","Y");
            	return;
     
            }
              catch(SignatureException e){
                logger.error("Authentication Failed. Username or Password not valid.");
             
                //throw new JwtException("사용자 인증 실패");
                return;
            }
        } else {
            //logger.warn("JWT Token does not begin with Bearer String");
           
        }
        response.setHeader("Token-expired","N");     
        // Once we get the token validate it.
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
        	
            UserDetails userDetails = null;
        	 if(JwtLoginInfo.userInfo.get(username) == null) {
        		 userDetails = this.jwtUserDetailsService.loadUserByUsername(username);
        		
				
			 }
        	 else {
        		 userDetails = new User(username, JwtLoginInfo.userInfo.get(username), new ArrayList<>());
        	 }
        	       	
            // if token is valid configure Spring Security to manually set
            // authentication
        	 
            if (jwtTokenUtil.validateToken(jwtToken, userDetails)) {
                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
                    userDetails, null, userDetails.getAuthorities());
                usernamePasswordAuthenticationToken
                    .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                // After setting the Authentication in the context, we specify
                // that the current user is authenticated. So it passes the
                // Spring Security Configurations successfully.
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
               
            }
        }
        chain.doFilter(request, response);
    }

}
