package utilities;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.ElementNotVisibleException;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import managers.WebDriverManager;


public class Actions {

	WebDriver driver;
	public WebElement element1;
	WebDriverManager webDriverManager;
	
	// Constructor
	public Actions(WebDriver driver) {
		
		this.driver = driver;
		if (driver != null) {
			this.driver.manage().timeouts().implicitlyWait(5000, TimeUnit.MILLISECONDS);
		}
	}

	public Actions OpenURL(String URL) {
		driver.navigate().to(URL);
		return this;
	}

	
	// Wait
	public Actions driverwait(long time) {
		driver.manage().timeouts().implicitlyWait(time, TimeUnit.SECONDS);
		return this;
	}

	
	// Click on any locator
	public Actions Click(ObjectLocator locator) {

		FindElement(locator).click();
		Log.info("Clicked on " + locator.locatorDescription);
		return this;
	}



	// Find Element
	public WebElement FindElement(ObjectLocator locator) {

		WebElement retElement = null;

		WaitForWebElement(locator);
		try {

			retElement = driver.findElement(locator.Locator);
		} catch (NoSuchElementException ex) {
			// Handle exception if the element is not found
			Log.error("NoSuchElementException: The Object " + locator.locatorDescription + " not found! "
					+ ex.getMessage());
			
		} catch (org.openqa.selenium.StaleElementReferenceException ex) {
			threadWait();
			retElement = driver.findElement(locator.Locator);
		} catch (ElementNotVisibleException ex) {
			// Handle exception if the element is not found
			Log.error("ElementNotVisibleException: The Object " + locator.locatorDescription + " not found! ");
		} catch (WebDriverException ex) {
			// Handle exception if the element is not found
			Log.error("NoSuchElementException: The Object " + locator.locatorDescription + " not found! "
					+ ex.getMessage());
		}
		return retElement;
	}


	// Enter the text
	public Actions EnterText(ObjectLocator locator, String text) {
		driverwait(15);
		FindElement(locator).sendKeys(text);
		Log.info("<EnterText on " + locator.locatorDescription + " as " + text + ">");
		return this;
	}

	

	
	// waits for webelement to be present and clickable on the screen
	public Actions WaitForWebElement(ObjectLocator locator) {
        try {
        	@SuppressWarnings("unused")
			WebElement element = (new WebDriverWait(driver, 30)
				.until(ExpectedConditions.elementToBeClickable(locator.Locator)));

        }catch (org.openqa.selenium.NoSuchElementException ex) {
			// Handle exception if the element is not found
        	Log.error("NoSuchElementException: The Object " + locator.locatorDescription + " not found! "
					+ ex.getMessage());
			throw ex;
		}
		return this;
	}

			
	public Actions SelectByValue(ObjectLocator locator, String value) {

		Select cmbSelect = new Select(FindElement(locator));
		cmbSelect.selectByValue(value);
		
		return this;
	}

	
	 //Switch to frame
	public Actions SwitchtoFrame(int count) {

		driver.switchTo().frame(count);
		return this;
	}

	public Actions SwitchtoFrameFromDefaultcontentBasedOnTheObjectLocator(ObjectLocator locator) {
		switchtoDefaultcontent();
		SwitchtoFrameBasedOnTheObjectLocator(locator);
		return this;
	}

	public Actions SwitchtoFrameBasedOnTheObjectLocator(ObjectLocator locator) {

		List<WebElement> elements = driver.findElements(By.tagName("iframe"));
		Log.info("Total iframe count " + elements.size());
		boolean isElementPresent = false;

		for (int count = (elements.size()-1); count >= 0; count--) {
			SwitchtoFrame(count);
			if (verifyElementPresentinUI(locator)) {
				Log.info("Element  " + locator.locatorDescription + " Present in the iframe " + count);
				return this;
			}
			switchtoParentFrame();
		}

		if (!isElementPresent) {
			Log.error("Element  " + locator.locatorDescription + " not present in the iframe" );
			System.out.println("Not present in the current frame list please check the frame!!!!!!");
		}

		return this;
	}


	
	public Actions switchtoDefaultcontent() {

		driver.switchTo().defaultContent();

		return this;

	}

	public Actions switchtoParentFrame() {

		driver.switchTo().parentFrame();

		return this;

	}


	public Actions threadWait() {
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {

			e.printStackTrace();
		}
		return this;
	}

	
	//Verify if an element is present on screen and return a boolean
	public boolean verifyElementPresentinUI(ObjectLocator locator) {
		
		try {
			this.driver.findElement(locator.Locator).isDisplayed();
			return true;
		} catch (NoSuchElementException e) {
	
			return false;
			}
		}
		
	public Actions moveToElement(ObjectLocator locator) {

		org.openqa.selenium.interactions.Actions act = new org.openqa.selenium.interactions.Actions(driver);

		act.moveToElement(FindElement(locator)).perform();
		return this;

	}
	
	public Actions moveCursorToSection(ObjectLocator locator) {
		
		WebElement element = FindElement(locator);
		org.openqa.selenium.interactions.Actions act = new org.openqa.selenium.interactions.Actions(driver);
		act.moveToElement(element, element.getSize().getWidth() - 10, 10).click().perform();
	
		return this;

	}
	
	public void selectFromSubTab(ObjectLocator Subtab, ObjectLocator SelectedSubTabSection, String Subsection) {
		int counter=0;
		Integer rowcount = 1;
		List<WebElement> lists = FindElements(Subtab);
				
		for (WebElement list : lists) {
			WebElement element = list.findElement(By.tagName("a"));

			if(element.getAttribute("innerText").trim().equalsIgnoreCase(Subsection)) {
				String hrefvaluefull = element.getAttribute("href");
				String [] href = hrefvaluefull.split("/");
								
				Click(SelectedSubTabSection.ReplaceLocator("$", rowcount.toString(),"%", href[(href.length-1)]));
				counter =1;
				break;
			}
			++rowcount;
		  }	
		
		if(counter!=1) {
			Assert.fail("Requested sub section is not present");
		}
	}
	
	public void selectRecommendationScore(ObjectLocator RecommendationScoreLabel,ObjectLocator RecommendationScore, 
			String Recommendation, String Subject) {
		int counter=0;
		Integer rowcount = 1;
		List<WebElement> labels = FindElements(RecommendationScoreLabel);
				
		for (WebElement label : labels) {
			String labelvalue = label.getAttribute("innerText").trim().substring(0, 1);

			if(labelvalue.equalsIgnoreCase(Recommendation)) {
												
				Click(RecommendationScore.ReplaceLocator("$",Subject ,"%", rowcount.toString()));
				counter =1;
				break;
			}
			++rowcount;
		  }	
		
		if(counter!=1) {
			Assert.fail("Requested recommendation score is not present");
		}
	}
	public List<WebElement> FindElements(ObjectLocator locator) {

		return driver.findElements(locator.Locator);
	}
}
	
	

