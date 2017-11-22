package StepDef;

import PageObjects.MyFirstPage;
import Util.ManageDriver;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.io.IOException;

public class MyFirstTest {

    ManageDriver SetDriver = new ManageDriver();
    MyFirstPage LoginPage = new MyFirstPage();

    @Before
    public void StartSession() {
        SetDriver.set_driver("firefox");
    }


    @Given("^I am on the home page$")
    public void i_am_on_the_home_page() throws Throwable {
       LoginPage.BaseUrl();
    }
    /*
    @When("^I enter my username$")
    public void i_enter_my_username() throws Throwable {
        LoginPage.Username();
    }

    @When("^I enter my Password$")
    public void i_enter_my_Password() throws Throwable {
        LoginPage.Password();
    }
*/

    @When("^I click login$")
    public void i_click_login() throws Throwable {
        LoginPage.ClickLogin();
    }
    @Then("^Homepage is displayed$")
    public void homepage_is_displayed() throws Throwable {
        LoginPage.ConfirmHomePage();

    }

    @After
    public  void EndSession() throws IOException, InterruptedException {
         SetDriver.CaptureScreenshot001();
        SetDriver.close_browser();
    }
}
