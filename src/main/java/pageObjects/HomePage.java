package pageObjects;

import org.openqa.selenium.WebDriver;

import dataProviders.ConfigFileReader;
import utilities.Actions;
import utilities.ObjectLocator;

public class HomePage {
	
	public static ObjectLocator tabCustomers = new ObjectLocator("Xpath", "//li[@class='customers navigation__item--has-sub']/a", "Customers tab in the Home Page");
	public static ObjectLocator subtabsCustomers = new ObjectLocator("Xpath", "//li[@class='customers navigation__item--has-sub navigation__item--has-sub--open']/ul/li", "Customers sub tab list");
	public static ObjectLocator tabPartners = new ObjectLocator("Xpath", "//li[@class='partners navigation__item--has-sub']/a", "Partners tab in the Home Page");
	public static ObjectLocator subtabsPartners = new ObjectLocator("Xpath", "//li[@class='partners navigation__item--has-sub navigation__item--has-sub--open']/ul/li", "Partners sub tab list");
	public static ObjectLocator selectedSubtabSection = new ObjectLocator("Xpath", "//ul[@class='navigation__sub']/li[$]/a[@href='%/']", "Customers sub tab");
	public static ObjectLocator tabGetStarted = new ObjectLocator("Xpath", "//ul[@class='navigation__main']//a[@href='/request-a-demo/' and @class='rad-page-click button button--small']", "Get Started tab in the Home Page");
	
	private String Page;
	Actions action;
	
	ConfigFileReader configFileReader = new ConfigFileReader();
	
	public HomePage(WebDriver driver) {
		action = new Actions(driver);
	}

	//Navigating to the page
	public HomePage navigateToPage(String Page){
		
		this.Page = Page;
		String  url = configFileReader.getApplicationUrl();
		action.OpenURL(url).threadWait();
			
		return this;
	}
	
	public HomePage navigateToSection(String SubSection){
		if(!(Page.contains("Home"))) {
			action.threadWait();
			
			switch(Page){
			case("Customers"):
				action.moveToElement(tabCustomers);
				action.selectFromSubTab(subtabsCustomers, selectedSubtabSection, SubSection);
				break;
			case("Partners"):
				action.moveToElement(tabPartners);
				action.selectFromSubTab(subtabsPartners, selectedSubtabSection, SubSection);
				break;
			case("Get Started"):
				action.Click(tabGetStarted);
				break;
			default:
				break;
			} 
			
			return this;
		}
		
		return this;
	}
	
	
	
}
