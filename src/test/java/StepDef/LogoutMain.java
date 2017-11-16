package StepDef;

import PageFactory.LogoutMainPage;
import PageObjects.MyFirstPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LogoutMain {

    LogoutMainPage Logout_Obj = new LogoutMainPage();
    MyFirstPage demo_Obj = new MyFirstPage();


    @When("^I click \"([^\"]*)\" link$")
    public void i_click_link(String arg1) throws Throwable {
       // Logout_Obj = new LogoutMainPage();
      //  Logout_Obj.Logoutlinktext();
          demo_Obj.pageOBJ_Logout();

    }

    @Then("^I should be on the \"([^\"]*)\" page\\.$")
    public void i_should_be_on_the_page(String arg1) throws Throwable {
        Logout_Obj.ConfirmloginPage();
    }


}
