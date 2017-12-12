package StepDef;



import PageObjects.MyFirstPage;
import PageObjects.RegisterPage;
import SingletonDesignPattern.Reuseable;
import Util.ManageDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;

public class RegisterStepdef extends ManageDriver {

    RegisterPage Registerpage_Obj = new RegisterPage();
    MyFirstPage Login_Parameterised_Obj = new MyFirstPage();
    Reuseable Main_Reg_Page = new Reuseable();

/*
    @When("^I click on \"([^\"]*)\" button$")
    public void i_click_on_button(String value) throws Throwable {
        if (value.equalsIgnoreCase("Register")) {
            Registerpage_Obj.ClickRegisterButton();
        } else if
                (value.equalsIgnoreCase("Submit")) {
            Registerpage_Obj.ClickSubmitButton();
        } else {
            System.out.println("Button not found");
        }
    }
*/
    @Then("^I am on the \"([^\"]*)\" page$")
    public void i_am_on_the_page(String value) throws Throwable {
        if (value.equalsIgnoreCase("Register")) {
            String Actual = driver.getTitle();
            String Expected = "Registration";


        } else if (value.equalsIgnoreCase("Login")){
            Login_Parameterised_Obj.BaseUrl();
        } else {
            System.out.println("I can not find the  header");
        }
    }
/*
    @When("^I enter my \"([^\"]*)\" in the \"([^\"]*)\" field$")
    public void i_enter_my_in_the_field(String value1, String value2) throws Throwable {
        if (value1.equals("email")) {
            Registerpage_Obj.EnterEmail();
        } else if (value1.equalsIgnoreCase("Username")) {
            Registerpage_Obj.EnterUsername();
        } else if (value1.equalsIgnoreCase("Password")) {
            Registerpage_Obj.EnterPassword();
        } else if (value1.equalsIgnoreCase("Confirm Password")) {
            Registerpage_Obj.EnterConfirmPassword();
        } else {
            System.out.println("The field you have entered does not exist");
        }
    }
    */


// Here is the singleton design pattern


    @Given("^I enter my \"([^\"]*)\" in the \"([^\"]*)\" field$")
    public void i_enter_my_in_the_field(String text_locator, String value) throws Throwable {
      switch (text_locator){
          case "email":
              Main_Reg_Page.TextField("#email", "AUDITT09@gmail.com");
              break;
          case "Username":
              Main_Reg_Page.TextField("html/body/div[1]/section[2]/div/div[2]/div/form/div[2]/div/input", "Reloaded249");
              break;
          case "Password":
              Main_Reg_Page.TextField("html/body/div[1]/section[2]/div/div[2]/div/form/div[3]/div/input", "12345678");
              break;
          case "Confirm Password":
              Main_Reg_Page.TextField("confirmpwd", "12345678");
              break;

          default: System.out.println("Textfield not found");

              break;
      }
    }

    @Then("^I click on \"([^\"]*)\" button$")
    public void i_click_on_button(String value) throws Throwable {
    switch (value){
        case"Register":
      Main_Reg_Page.Do_Click("reg_login");
            break;

        case"Submit":
            Main_Reg_Page.Do_Click("submitbtn");
            break;

        default: System.out.println("Button not found");

        break;
    }
    }
}

// How to build a customise xpath

// What type of xpath is the beloe?
//  html/body/div[1]/section[2]/div/div[2]/div/form/div[1]/div/input
