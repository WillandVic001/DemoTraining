package StepDef;

import PageFactory.AllTabs;
import PageFactory.BookYourJetPage;
import PageObjects.BookYourJetPageObject;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BookYourJet {

    BookYourJetPage bookyourjet_Obj = new BookYourJetPage();

    BookYourJetPageObject bookYourJet_Obj_Main = new BookYourJetPageObject ();
    AllTabs alltabs_Obj = new AllTabs();

    @Given("^I click \"([^\"]*)\" nav bar$")
    public void i_click_nav_bar(String nav_bar) throws Throwable {
        if (nav_bar.equalsIgnoreCase("Book Your Jet")) {
            bookyourjet_Obj.Click_BookYourJet_NavBar();
            Thread.sleep(3000);
        } else {
            alltabs_Obj.ClickAllTabs();

        }

    }

    @Given("^I enter \"([^\"]*)\"$")
    public void i_enter(String textfield) throws Throwable {
        if (textfield.equalsIgnoreCase("Start Destination")) {
            bookyourjet_Obj = new BookYourJetPage();
            bookyourjet_Obj.Start_Destination();
            Thread.sleep(3000);
        } else if (textfield.equalsIgnoreCase("End Destination")) {
            bookyourjet_Obj.End_Destination();
            Thread.sleep(3000);

        } else {
            System.out.println("Regular expression not found");
        }
    }

    @When("^I click submit button$")
    public void i_click_submit_button() throws Throwable {
        bookyourjet_Obj.Click_Submit_Button();
        Thread.sleep(3000);

    }

    @When("^I select the timezone$")
    public void i_select_the_timezone() throws Throwable {
        bookYourJet_Obj_Main.SelectDropdown();
    }

    @Then("^a book your jet confirmation page is displayed\\.$")
    public void a_book_your_jet_confirmation_page_is_displayed() throws Throwable {
        bookYourJet_Obj_Main.ConfirmBookYourJetPage_Displayed();
    }

}

// If statement are conditional statement