Feature: Sauce demo page validations

    @pass
    Scenario Outline:Placing the Order
        Given a user login to sauce demo application with "<username>" and "<password>"
        And Add "<prodName>" to cart
        Then Verify "<prodName>" is displayed in the cart
        And Enter Valid user details as "<userFName>" ,"<userLName>" ,"<postalCode>"
        Then Verify the "<prodName>" order details and place the Order
        Then Verify checkout is completed with success message "<CompleteOrderText>" and navigate back to home

        Examples:
            | username      | password     | prodName                | userFName | userLName | postalCode | CompleteOrderText         |
            | standard_user | secret_sauce | Sauce Labs Bolt T-Shirt | TestFName | TestLName | RH1 0YA    | Thank you for your order! |



    @fail
    Scenario Outline:When checkout Info and overview page is throwing error
        Given a user login to sauce demo application with "<username>" and "<password>"
        And Add "<prodName>" to cart
        Then Verify "<prodName>" is displayed in the cart
        And Enter Valid user details as "<userFName>" ,"<userLName>" ,"<postalCode>"
        Then Verify the "<prodName>" order details and place the Order
        Then Verify checkout is completed with success message "<CompleteOrderText>" and navigate back to home

        Examples:
            | username   | password     | prodName                | userFName | userLName | postalCode | CompleteOrderText         |
            | error_user | secret_sauce | Sauce Labs Bolt T-Shirt | TestFName | TestLName | RH1 0YA    | Thank you for your order! |


    @pass
    Scenario Outline:User try to delete the product/products added in the cart from Product Page
        Given a user login to sauce demo application with "<username>" and "<password>"
        And Add "<prodName>" to cart
        Then cart count is "displayed"
        When user remove the product "<prodName>" from the products page
        Then cart count is "not displayed"
        And no product "<prodName>" is displayed in the cart page


        Examples:
            | username      | password     | prodName            |
            | standard_user | secret_sauce | Sauce Labs Backpack |

    @fail
    Scenario Outline:User try to delete the product/products added in the cart from Product Page
        Given a user login to sauce demo application with "<username>" and "<password>"
        And Add "<prodName>" to cart
        Then cart count is "displayed"
        When user remove the product "<prodName>" from the products page
        Then cart count is "not displayed"
        And no product "<prodName>" is displayed in the cart page


        Examples:
            | username      | password     | prodName            |
            | error_user    | secret_sauce | Sauce Labs Backpack |
