package stepDefinitions;

import org.apache.log4j.xml.DOMConfigurator;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

//import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import managers.PageObjectManager;
import managers.WebDriverManager;
import pageObjects.FeedbackPage;
import pageObjects.FeedbackSectionPage;
import pageObjects.HomePage;
import utilities.Log;

public class Steps {
	HomePage homePage;
	PageObjectManager pageObjectManager;
	FeedbackPage feedbackPage;
	FeedbackSectionPage feedbackSectionPage;
	WebDriverManager webDriverManager;
	WebDriver driver;
	

	@Before
	public void startIteration() {
		webDriverManager = new WebDriverManager();
		driver = webDriverManager.getDriver();
		DOMConfigurator.configure("log4j.xml");
		Log.startTestCase();
				

	}
	@Given("^User has naviagted to the \"([^\"]*)\" in Usabilla$")
	public void user_has_naviagted_to_the_in_Usabilla(String Page) throws Throwable {
//		webDriverManager = new WebDriverManager();
//		driver = webDriverManager.getDriver();
		pageObjectManager = new PageObjectManager(driver);
		homePage = pageObjectManager.getHomePage();
		homePage.navigateToPage(Page);
	}


	@Given("^selected \"([^\"]*)\"$")
	public void selected(String Subsection) throws Throwable {
		homePage.navigateToSection(Subsection);
	}
	
	@When("^User wants to provide \"([^\"]*)\"$")
	public void user_wants_to_provide(String FeedbackType) throws Throwable {
		feedbackPage = pageObjectManager.getFeedbackPage();
		feedbackPage.provideFeedback();
		feedbackPage.selectFeedbackType(FeedbackType);
	}

	@When("^User selects \"([^\"]*)\" for providing Feedback$")
	public void user_selects_for_providing_Feedback(String Section) throws Throwable {
		feedbackSectionPage = pageObjectManager.getFeedbackSectionPage();
		feedbackSectionPage.selectSectionForFeedback(Section);
	}

	@When("^User provides \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void user_provides(String Rating, String Subject, String Content, String Email, String Recommendation) throws Throwable {
		
		feedbackPage.enterFeedbackDetails(Rating, Subject, Content, Email, Recommendation);
		
	}

	@Then("^User should be able to submit the Feedback$")
	public void user_should_be_able_to_submit_the_Feedback() throws Throwable {
		feedbackPage.submitFeedbackDetails();
//		webDriverManager.closeDriver();
	}
	
	@Then("^User should be able to cancel the Feedback$")
	public void user_should_be_able_to_cancel_the_Feedback() throws Throwable {
		feedbackPage.cancelFeedbackSubmition();
//		webDriverManager.closeDriver();
	}
	
	@After
	public void endIteration() {
	
		webDriverManager.closeDriver();
		Log.endTestCase();;

	}
}
