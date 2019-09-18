package br.com.dbccompany.LandingPageDbc.Controller;

import br.com.dbccompany.LandingPageDbc.Entity.AbstractEntity;
import br.com.dbccompany.LandingPageDbc.Service.AbstractService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public abstract class AbstractController
        <
                Entity extends AbstractEntity,
                EntityRepository extends CrudRepository<Entity, Integer>,
                EntityService extends AbstractService<EntityRepository, Entity>
                > {

    @Autowired
    EntityService entityService;

    @GetMapping(value = "/")
    @ResponseBody
    public List<Entity> getAll(){
        return entityService.getAll();
    }

    @GetMapping(value = "/{param}")
    @ResponseBody
    public Entity find(@PathVariable String param){
        try {
            Integer id = Integer.parseInt(param);
            return entityService.searchByID(id);
        } catch (NumberFormatException e){
            System.err.println("Cannot be format");
        }
        return null;
    }

    @PostMapping(value = "/add")
    @ResponseBody
    public Entity add(@RequestBody Entity entidade) throws Exception{
        return entityService.saveEntity(entidade);
    }

    @PutMapping(value = "/edit/{id}")
    @ResponseBody
    public Entity edit(@PathVariable Integer id, @RequestBody Entity entidade) throws Exception{
        return entityService.editByID(id, entidade);
    }

    @DeleteMapping(value = "/deletar/{id}")
    @ResponseBody
    public void remove(@PathVariable Integer id) throws Exception{
        entityService.deleteByID(id);
    }

}
