package com.bekzatsky.crud.repositories;

import com.bekzatsky.crud.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
