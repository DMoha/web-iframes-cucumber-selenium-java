package pageObjects;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import utilities.Actions;
import utilities.Log;
import utilities.ObjectLocator;

public class FeedbackPage {
	
	public static ObjectLocator btnFeedback = new ObjectLocator("Xpath", "//iframe[@title = 'Usabilla Feedback Button']", "Feedback button");
	public static ObjectLocator linkFeedbackClose = new ObjectLocator("Xpath", "//form[@class='usabilla_ui_form ']/a[@class='close']", "Close link in Feedback section");
	public static ObjectLocator listRating = new ObjectLocator("Xpath", "//ul[@class='rating']/li", "Rating list in Feedback form");
	public static ObjectLocator radiobtnRating = new ObjectLocator("Xpath", "//ul[@class='rating']/li[@class='rating_$']", "Rating in Feedback form");
	public static ObjectLocator dropdownSubject = new ObjectLocator("Xpath", "//select[@name='subject']", "Subject dropdown in Feedback form");
	public static ObjectLocator textFeedbackContent = new ObjectLocator("Xpath", "//textarea[@name='feedback' and @aria-labelledby='comment-input-$']", "Feedback text area");
	public static ObjectLocator textEmail = new ObjectLocator("Xpath", "//div[@class='element_control email_input']//input[@name='email' and @aria-labelledby='email-input-$']", "Email text area");
	public static ObjectLocator labelRecommendedRating = new ObjectLocator("Xpath", "//p[@aria-describedby='nps-input-$']/following-sibling::div/label", "Recommendion Rating label");
	public static ObjectLocator radiobtnRecommendedRating = new ObjectLocator("Xpath", "//p[@aria-describedby='nps-input-$']/following-sibling::div/label[%]", "Recommendion Rating button");
	public static ObjectLocator btnFeedbackSubmit = new ObjectLocator("Xpath", "//button[@class='submit']", "Feedback Submit button");
	public static ObjectLocator btnContinue = new ObjectLocator("Xpath", "//a[@class='continue']", "Continue browsing button");
	public static ObjectLocator specificFeedbackType = new ObjectLocator("Xpath", "//div[@class='choice choice_specific']", "Specific Feedback section");
	public static ObjectLocator generalFeedbackType = new ObjectLocator("Xpath", "//div[@class='choice choice_general']", "Generic Feedback section");
	
	
	Actions action;
	
	public FeedbackPage(WebDriver driver) {
		action = new Actions(driver);
	}

	public FeedbackPage provideFeedback(){
		
		action.WaitForWebElement(btnFeedback)
		      .Click(btnFeedback);
		return this;
	}
	
	public FeedbackPage selectFeedbackType(String FeedbackType){
		
		action.threadWait();
		if(FeedbackType.contains("Specific")) {
			action.SwitchtoFrameFromDefaultcontentBasedOnTheObjectLocator(specificFeedbackType)
				  .Click(specificFeedbackType);
		}else if(FeedbackType.contains("General")) {
			action.SwitchtoFrameFromDefaultcontentBasedOnTheObjectLocator(generalFeedbackType)
			  .Click(generalFeedbackType);
		}else {
			Assert.fail("Invalid feedback type provided");
		}
		return this;
	}
	
	public FeedbackPage enterFeedbackDetails(String Rating, String Subject, String Content,String Email, 
			String Recommendation){
		String subject = Subject.toLowerCase();
		
		action.threadWait();
		action.SwitchtoFrameFromDefaultcontentBasedOnTheObjectLocator(listRating)
			  .Click(radiobtnRating.ReplaceLocator(Rating));
		
		action.threadWait();
		action.SwitchtoFrameFromDefaultcontentBasedOnTheObjectLocator(dropdownSubject)
			  .SelectByValue(dropdownSubject, subject);
		
		if(Content.isEmpty()) {
			Log.fatal("Feedback message is empty");
			Assert.fail("Feedback message cannot be empty");
		}else {
		action.SwitchtoFrameFromDefaultcontentBasedOnTheObjectLocator(textFeedbackContent.ReplaceLocator(subject))
		      .EnterText(textFeedbackContent.ReplaceLocator(subject), Content);
		}
		
		if(!(Email.isEmpty())) {
			action.SwitchtoFrameFromDefaultcontentBasedOnTheObjectLocator(textEmail.ReplaceLocator(subject))
			  .EnterText(textEmail.ReplaceLocator(subject), Email);
		}
		
		if(!(Subject.equalsIgnoreCase("Bug"))) {
			action.SwitchtoFrameFromDefaultcontentBasedOnTheObjectLocator(labelRecommendedRating.ReplaceLocator(subject))
				  .selectRecommendationScore(labelRecommendedRating, radiobtnRecommendedRating, Recommendation, subject);;
		}
		
		return this;
		
	}
	
	public FeedbackPage submitFeedbackDetails() {
		
		action.SwitchtoFrameFromDefaultcontentBasedOnTheObjectLocator(btnFeedbackSubmit)
			  .Click(btnFeedbackSubmit);
		action.SwitchtoFrameFromDefaultcontentBasedOnTheObjectLocator(btnContinue)
			  .Click(btnContinue);
		return this;
		
	}
	
	public FeedbackPage cancelFeedbackSubmition() {
		
		action.SwitchtoFrameFromDefaultcontentBasedOnTheObjectLocator(linkFeedbackClose)
			  .Click(linkFeedbackClose);
		
		if(action.verifyElementPresentinUI(linkFeedbackClose)) {
			Log.error("Feedback window is not closed");
			Assert.fail("Feedback window is not closed");
		}
		
		return this;
		
	}
}
