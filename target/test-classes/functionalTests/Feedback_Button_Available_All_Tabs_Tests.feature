Feature: Test the Feedback button on different tabs
Description: This feature will test the functionalities of Feedback button on different tabs
  
  @End2EndTest
  Scenario Outline: Successful submission of a specific feedback from Get Started tab
    Given User has naviagted to the "<Page>" in Usabilla
    And selected "<Subsection>"
    When User wants to provide "<Feedback>"
    And User selects "<Section>" for providing Feedback
    And User provides "<Rating>", "<Subject>", "<Content>", "<Email>", "<Recommendation>"
    Then User should be able to submit the Feedback
   Examples: Details
    | Page        | Subsection | Feedback | Section           | Rating | Subject    | Content                   | Email | Recommendation |
    | Get Started |            | Specific | Request Demo Form | 4      | Suggestion | Field names can be bolder |       |       7        |

    
  @End2EndTest
  Scenario Outline: Successful submission of a general feedback from Customers tab
    Given User has naviagted to the "<Page>" in Usabilla
    And selected "<Subsection>"
    When User wants to provide "<Feedback>"
    And User provides "<Rating>", "<Subject>", "<Content>", "<Email>", "<Recommendation>"
    Then User should be able to submit the Feedback
   Examples: Details
    | Page      | Subsection   | Feedback | Rating | Subject    | Content  | Email              | Recommendation |
    | Customers | Our Clients  | General  | 4      | Question   | Question |                    |       8        |
    | Customers | Case Studies | General  | 5      | Compliment | Awesome  | deepu212@gmail.com |       9        |
 
 @End2EndTest
  Scenario Outline: Successful cancellation of a general feedback from Partners tab
    Given User has naviagted to the "<Page>" in Usabilla
    And selected "<Subsection>"
    When User wants to provide "<Feedback>"
    And User provides "<Rating>", "<Subject>", "<Content>", "<Email>", "<Recommendation>"
    Then User should be able to cancel the Feedback
   Examples: Details
    | Page     | Subsection           | Feedback | Rating | Subject    | Content | Email | Recommendation |
    | Partners | Partnership Overview | General  | 2      | Bug        | Nothing |       |       4        |  
    