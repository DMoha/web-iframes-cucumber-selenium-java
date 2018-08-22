package dataProviders;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import enums.DriverType;

public class ConfigFileReader {
	private Properties properties;
	private static File propertyFilePath = new File(System.getProperty("user.dir") + "\\src\\main\\resources\\" + "config.properties");

	
	public ConfigFileReader(){
		FileInputStream fis = null;
		try {
			fis = new FileInputStream(propertyFilePath);
		} catch (FileNotFoundException e) {
	
			e.printStackTrace();
		} 
		// Loading File into inputStream
		properties = new Properties();
		try {
			properties.load(fis);
		} catch (IOException e) {
			
			e.printStackTrace();
		}
	}
	
	
	
	public long getPageloadWait() {		
		String implicitlyWait = properties.getProperty("Pageload_Wait");
		if(implicitlyWait != null) {
			return Long.parseLong(implicitlyWait);
		} 
		else {
			throw new RuntimeException("Pageload Wait not specified in the Configuration.properties file.");	
		} 	
	}
	
	public String getApplicationUrl() {
		String url = properties.getProperty("URL");
		if(url != null) {
			return url;
		} 
		else {
			throw new RuntimeException("URL not specified in the Configuration.properties file.");
		} 
	}
	
	public DriverType getBrowser() {
		String browserName = properties.getProperty("browser");
		if(browserName == null || browserName.equalsIgnoreCase("chrome")) {
			return DriverType.CHROME;
		} else if(browserName.equalsIgnoreCase("firefox")) {
			return DriverType.FIREFOX;
		} else {
			throw new RuntimeException("Browser Name Key value in Configuration.properties is not matched : " + browserName);
		} 
	}
}
