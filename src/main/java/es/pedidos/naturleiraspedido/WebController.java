package es.pedidos.naturleiraspedido;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
  
@Controller
public class WebController {
	
    @RequestMapping(value="/",method = RequestMethod.GET)
    public String home(){
        return "index.html";
        //return "reactBootstrap2.html";
    }
    
    @ResponseBody
    @RequestMapping(value="/greeting",method = RequestMethod.GET)
    public List<Employee> Greeting(){
    	List<Employee> a = new ArrayList<Employee>();
    	Employee miguel = new Employee("Miguel", 1,2);
    	a.add(miguel);
    	return a;
        //return "Message From SpringBoot Service - Hello World!";
    }
}