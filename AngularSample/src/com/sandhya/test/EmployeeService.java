/**
 * 
 */
package com.sandhya.test;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.sandya.dto.EmployeeDTO;
import com.sandya.dto.EmployeeList;
import com.thoughtworks.xstream.XStream;
import com.thoughtworks.xstream.io.json.JettisonMappedXmlDriver;

/**
 * @author sandhya
 *
 */
@Path("EmployeeService")
public class EmployeeService {

	
	@GET
	@Path("getEmployeeList")
	@Produces(MediaType.APPLICATION_JSON)
	public String getEmployeeList(){
		//For XStream
		XStream xstream = new XStream(new JettisonMappedXmlDriver());
		xstream.setMode(XStream.NO_REFERENCES);
		xstream.aliasSystemAttribute(null, "class");
		xstream.autodetectAnnotations(true);
		xstream.alias("EmployeeDTO", EmployeeDTO.class);
		xstream.alias("EmployeeList", EmployeeList.class);
		
		EmployeeList employeeResponse = new EmployeeList();
		EmployeeDTO employeeDTO = null;
		List<EmployeeDTO> employeeList = new ArrayList<EmployeeDTO>();
		
		// hard coding instead of pulling from DB
		for(int i=0;i<5;i++){
			employeeDTO = new EmployeeDTO();
			employeeDTO.setEmployeeName(" Sandya"+i);
			employeeDTO.setEmail(" Sandya email"+i);
			employeeDTO.setPhone(" Sandya phone"+i);
			employeeList.add(employeeDTO);
		}
		employeeResponse.setEmployeeList(employeeList);
		
		String result = xstream.toXML(employeeResponse);
		return result;
		
	}

}
