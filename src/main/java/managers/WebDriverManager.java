package managers;

import java.io.File;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import enums.DriverType;

public class WebDriverManager {
	private WebDriver driver;
	private static DriverType driverType;
	private static final String CHROME_DRIVER_PROPERTY = "webdriver.chrome.driver";
	private static final String FIREFOX_DRIVER_PROPERTY = "webdriver.gecko.driver";
	private File file1 = new File(System.getProperty("user.dir") + "\\src\\main\\resources\\ChromeDriver\\chromedriver.exe");
	private File file2 = new File(System.getProperty("user.dir") + "\\src\\main\\resources\\GeckoDriver\\geckodriver.exe");
	
 
	public WebDriverManager() {
		driverType = FileReaderManager.getInstance().getConfigReader().getBrowser();
		
	}
 
	public WebDriver getDriver() {
		if(driver == null) driver = createDriver();
		return driver;
	}
 
	private WebDriver createDriver() {
		switch (driverType) {	    
        case FIREFOX : 
        	System.setProperty(FIREFOX_DRIVER_PROPERTY, file2.getAbsolutePath());
        	driver = new FirefoxDriver();
	    	break;
        case CHROME : 
        	System.setProperty(CHROME_DRIVER_PROPERTY, file1.getAbsolutePath());
        	driver = new ChromeDriver();
    		break;
        
        }
 
		driver.manage().window().maximize();
		return driver;
	}
 

	public void closeDriver() {
		driver.getWindowHandle();
		driver.close();
		driver.quit();
		
	}
 
}
