package StepDef;

import PageObjects.MyFirstPage;
import cucumber.api.java.en.When;

public class MyTestEfficient {

    MyFirstPage Ef_Obj = new MyFirstPage();

    @When("^I enter my \"([^\"]*)\"$")
    public void i_enter_my(String value, String text) throws Throwable {
        if(value.equalsIgnoreCase("Username")){
            Ef_Obj.Username();

        } else if(value.equalsIgnoreCase("Password")){
            // else means in addition
            // if means presuming or providing
            Ef_Obj.Password();
        } else{
            System.out.println("Super Selenium Cucumber Test");
        }

    }
}

//
