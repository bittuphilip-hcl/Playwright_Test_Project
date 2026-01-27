Feature: Sauce demo page validations

    Scenario Outline:Placing the Order
        Given a user login to sauce demo application with "<username>" and "<password>"
        And Adding "<prodName>" to cart
        Then Verify "<prodName>" is displayed in the cart
        And Enter Valid user details as "<userFName>" ,"<userLName>" ,"<postalCode>"
        Then Verify the "<prodName>" order details and place the Order
        Then Verify checkout is completed with success message "<CompleteOrderText>" and navigate back to home

        Examples:
            | username      | password     | prodName                | userFName | userLName | postalCode | CompleteOrderText         |
            | standard_user | secret_sauce | Sauce Labs Bolt T-Shirt | TestFName | TestLName | RH1 0YA    | Thank you for your order! |


