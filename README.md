# webuitests-cucumber-selenium-java
This maven project will help in Automating Feedback button functionalities using selenium WebDriver and Cucumber-java to reduce the manual time.
Selenium-cucumber is a behavior driven development (BDD) approach to write automation test script to test Web. It enables you to write and
execute automated acceptance tests

# Prerequisites
1. [Maven](https://maven.apache.org/download.cgi)
2. [Java](https://java.com/en/download/manual.jsp)
3. Latest version of Firefox or chrome to run the scripts
4. [Gecko driver](https://github.com/mozilla/geckodriver/releases)
5. [Chrome Driver](https://sites.google.com/a/chromium.org/chromedriver/)
6. Eclipse
7. Eclipse Plugins: Maven, Cucumber

# Setting up Project
1. Install Java and set the path.
2. Install Maven and set the path.
3. Clone respective repository or download zip.

# Framework Architecture

**_src/test/resources/funtionalTests_** - all the cucumber features files (files .feature ext) goes here.

**_src/test/java/stepDefinitions_** - you can define step definition under this package for your feature steps and also Hooks where you can configure all before and after test settings. Hooks contains code for intializing driver instances for respective driver.

**_src/test/java/runners_** - this package contains cucumber runner where you can configure your glue code location (step defintions), define test result output format.(html, json, xml).

**_src/main/java/dataProviders_** - this package contains the file reader configuration.

**_src/main/java/pageObjects_** - all page classes are kept under this package.

**_src/main/java/enums_** - you can define the enumerators in this package.

**_src/main/java/managers_** - this package contains page object manager, WebDriver manager and File reader manager for better management of object creation

**_src/main/java/utilities_** - we define all the helper classes inside this package

**_src/main/resources_** - When you run your test on multiple browser you have to provide capabilities and information here.

**_target/cucumber-reports_** - cucumber reports can be found in this folder

# Writing a test
The cucumber features goes in the features library and should have the ".feature" extension.
You can extend the features provided in the package or make your own features

# Running test
Import the maven project from GitHub to an IDE. There are two ways to start execution
```
1. Run the Test Runner class as Junit test
2. Run the project as Maven test
```


Alternately you go to your project directory from terminal and hit following commands
```
mvn test
```
