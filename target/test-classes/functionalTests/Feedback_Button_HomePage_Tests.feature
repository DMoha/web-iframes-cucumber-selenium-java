Feature: Test the Feedback button on Homepage
Description: This feature will test the functionalities of Feedback button on the Home page
 
  @End2EndTest
  Scenario Outline: Successful submission of a specific feedback
    Given User has naviagted to the "<Page>" in Usabilla
    When User wants to provide "<Feedback>"
    And User selects "<Section>" for providing Feedback
    And User provides "<Rating>", "<Subject>", "<Content>", "<Email>", "<Recommendation>"
    Then User should be able to submit the Feedback
   Examples: Details
    | Page | Feedback | Section    		| Rating | Subject    | Content | Email | Recommendation |
    | Home | Specific | Feedback button | 4      | Suggestion | Great   |       |       8        |
    | Home | Specific | Logo		 	| 5      | Compliment | Awesome |       |       9        |
    
    
  @End2EndTest
  Scenario Outline: Successful submission of a general feedback
    Given User has naviagted to the "<Page>" in Usabilla
    When User wants to provide "<Feedback>"
    And User provides "<Rating>", "<Subject>", "<Content>", "<Email>", "<Recommendation>"
    Then User should be able to submit the Feedback
   Examples: Details
    | Page | Feedback | Rating | Subject    | Content | Email | Recommendation |
    | Home | General  | 4      | Suggestion | Great   |       |       7        |
    | Home | General  | 5      | Compliment | Awesome |       |       8        |
    
  @End2EndTest
  Scenario Outline: Successful Cancellation of a general feedback
    Given User has naviagted to the "<Page>" in Usabilla
    When User wants to provide "<Feedback>"
    And User provides "<Rating>", "<Subject>", "<Content>", "<Email>", "<Recommendation>"
    Then User should be able to cancel the Feedback
   Examples: Details
    | Page | Feedback | Rating | Subject    | Content | Email 			 | Recommendation |
    | Home | General  | 1      | Bug        | Issue   | test@example.com |       1        |
    