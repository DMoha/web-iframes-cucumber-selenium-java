package managers;


import org.openqa.selenium.WebDriver;

import pageObjects.FeedbackPage;
import pageObjects.FeedbackSectionPage;
import pageObjects.HomePage;

public class PageObjectManager {

	private WebDriver driver;
	private HomePage homePage;
 	private FeedbackPage feedbackPage;
 	private FeedbackSectionPage feedbackSectionPage;
 	
 	public PageObjectManager(WebDriver driver) {
 		 
		this.driver = driver;
 
	}
	public HomePage getHomePage(){
 
		return (homePage == null) ? homePage = new HomePage(driver) : homePage;
 
	}
	
	public FeedbackPage getFeedbackPage(){
		 
		return (feedbackPage == null) ? feedbackPage = new FeedbackPage(driver) : feedbackPage;
 
	}
	
	public FeedbackSectionPage getFeedbackSectionPage(){
		 
		return (feedbackSectionPage == null) ? feedbackSectionPage = new FeedbackSectionPage(driver) : feedbackSectionPage;
 
	}
	
	
}
