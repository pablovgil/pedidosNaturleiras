package es.pedidos.naturleiraspedido;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
  
@Controller
public class WebController {
	
    @RequestMapping(value="/",method = RequestMethod.GET)
    public String home(){
        //return "bootstraphelloworld.html";
        return "reactBootstrap2.html";
    }
    
    @ResponseBody
    @RequestMapping(value="/greeting",method = RequestMethod.GET)
    public String Greeting(){
        return "Message From SpringBoot Service - Hello World!";
    }
}