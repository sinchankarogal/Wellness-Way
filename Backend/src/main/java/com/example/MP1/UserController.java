package com.example.MP1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/PCOS")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/User/register")
    public ResponseEntity<User> createUser(@RequestBody Map<String, String> payload) {
        User user = userService.createuser(
                payload.get("name"),
                payload.get("phone"),
                payload.get("email"),
                payload.get("password")
        );
        return ResponseEntity.ok(user);
    }

    @PostMapping("/User/login")
    public ResponseEntity<User> loginUser(@RequestBody Map<String, String> loginRequest) {
        String email = loginRequest.get("email");
        String password = loginRequest.get("password");
        User user = userService.loginUser(email, password);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(401).build();
        }
    }
}
