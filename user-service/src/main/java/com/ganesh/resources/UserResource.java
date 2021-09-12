package com.ganesh.resources;


import com.ganesh.bean.User;
import com.ganesh.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping(path = "/users")
public class UserResource {

    private UserService userService;

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @Autowired

    @GetMapping(produces = "Application/json")
    @CrossOrigin(origins = "http://localhost:8080")
    Collection<User> findAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping(path = "/{id}", produces = "Application/json")
    @CrossOrigin(origins = "http://localhost:8080")
    User getUserById(@PathVariable("id") int id) {
        return userService.getUserById(id);
    }

    @GetMapping(path = "/name/{userName}", produces = "Application/json")
    @CrossOrigin(origins = "http://localhost:8080")
    User getUserByName(@PathVariable("userName") String userName) {
        return userService.getUserByName(userName);
    }


    @GetMapping(path = "/xml/{id}", produces = "Application/xml")
    @CrossOrigin(origins = "http://localhost:8080")
    public User getXmlMovieById(@PathVariable("id") int id) {
        return userService.getUserById(id);
    }

    @RequestMapping(method = RequestMethod.POST, produces = "Application/json", consumes = "Application/json")
    @CrossOrigin(origins = "http://localhost:8080")
    User saveUser(@RequestBody User user) {
        return userService.insertUser(user);
    }


    @RequestMapping(path = "/{id}/{name}", method = RequestMethod.PUT, produces = "Application/json")
    @CrossOrigin(origins = "http://localhost:8080")
    User updateUserName(@PathVariable("id") int id, @PathVariable("name") String name) {
        return userService.updateUserName(id, name);
    }

    @RequestMapping(path = "/{id}/changePassword/{password}", method = RequestMethod.PUT, produces = "Application/json")
    @CrossOrigin(origins = "http://localhost:8080")
    User updateUserPassword(@PathVariable("id") int id, @PathVariable("password") String password) {
        return userService.updateUserPassword(id, password);
    }

    @RequestMapping(path = "/changePassword", method = RequestMethod.PUT, produces = "Application/json",consumes = "Application/json")
    @CrossOrigin(origins = "http://localhost:8080")
    User updateUserPassword(@RequestBody User user) {
        return userService.updateUserPassword(user.getId(), user.getPassword());
    }

    @DeleteMapping(path = "/{id}", produces = "Application/json", consumes = "Application/json")
    @CrossOrigin(origins = "http://localhost:8080")
    User deleteMovie(@PathVariable("id") int id) {
        return userService.deleteUserById(id);
    }
}
