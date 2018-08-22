package pageObjects;

import org.openqa.selenium.WebDriver;

import utilities.Actions;
import utilities.ObjectLocator;

public class FeedbackSectionPage {
	
	public static ObjectLocator btnFeedback = new ObjectLocator("Xpath", "//iframe[@title = 'Usabilla Feedback Button']", "Feedback button");
	public static ObjectLocator imageLogo = new ObjectLocator("Xpath", "//nav[@class='navigation navigation--homepage']//a[@class='navigation__logo']", "Logo on the Hom Page");
	public static ObjectLocator formRequestDemo = new ObjectLocator("Xpath", "//div[@class='form']/div", "Logo on the Hom Page");
	
	
	Actions action; 
	
	public FeedbackSectionPage(WebDriver driver) {
		action = new Actions(driver);
	}

	public FeedbackSectionPage selectSectionForFeedback(String Section){
		
		action.threadWait();
		
		switch(Section){
		case("Feedback button"):
			action.moveCursorToSection(btnFeedback);
			break;
		case("Logo"):
			action.moveCursorToSection(imageLogo);
			break;
		case("Request Demo Form"):
			action.moveCursorToSection(formRequestDemo);
			break;
		default:
			break;
		} 
		
		return this;
	}
}
