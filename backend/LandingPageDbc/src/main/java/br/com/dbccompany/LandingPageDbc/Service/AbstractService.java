package br.com.dbccompany.LandingPageDbc.Service;

import br.com.dbccompany.LandingPageDbc.Entity.AbstractEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public abstract class AbstractService <
        Repository extends CrudRepository<Entity, Integer>,
        Entity extends AbstractEntity > {

    @Autowired
    Repository repository;

    @Transactional(rollbackFor = Exception.class)
    public Entity saveEntity(Entity Entity) throws Exception{
        return repository.save(Entity);
    }

    @Transactional(rollbackFor = Exception.class)
    public void deleteByID(Integer id){
        repository.deleteById(id);
    }

    public Entity searchByID(Integer id){
        return repository.findById(id).get();
    }

    public List<Entity> getAll(){
        return (List<Entity>) repository.findAll();
    }

    @Transactional(rollbackFor = Exception.class)
    public Entity editByID(Integer id, Entity Entity) throws Exception{
        Entity news = repository.findById(id).get();
        news.setId(id);
        return repository.save(news);
    }

}
