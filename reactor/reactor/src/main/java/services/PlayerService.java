package services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repositorys.PlayerRepository;

@Service
public class playerService {

    @Autowired
    PlayerRepository repository;
}
