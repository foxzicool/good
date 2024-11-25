Feature: Home Page
  Scenario: I can see home page
    When I visit "/"
    Then I can see title "Welcome to Nuxt!"
