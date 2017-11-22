package StepDef;

import PageFactory.AllTabs;
import PageObjects.MyFirstPage;
import cucumber.api.java.en.Then;

public class AllTabsStepDef {

    AllTabs alltabs_confirm = new AllTabs();
    MyFirstPage Confirm_Homepage = new MyFirstPage();


    @Then("^\"([^\"]*)\" page is displayed$")
    public void page_is_displayed(String value) throws Throwable {
        if (value.equalsIgnoreCase("Home")){
            Confirm_Homepage.ConfirmHomePage();
        }else  if (value.equalsIgnoreCase("Contact Support")){
            alltabs_confirm.Confirm_ContactSupporttab();
        } else {
        System.out.println("Object not found");
        }
    }


}
