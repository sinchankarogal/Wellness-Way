package com.example.MP1;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "User")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    private ObjectId id;
    private String name;
    private String phone;
    private String email;
    private String password;

    public User(String name, String phone, String email,String password) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }
}
