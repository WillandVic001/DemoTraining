package StepDef;

import PageFactory.AllTabs;
import cucumber.api.java.en.Then;

public class AllTabsStepDef {

    AllTabs alltabs_confirm = new AllTabs();


    @Then("^\"([^\"]*)\" page is displayed$")
    public void page_is_displayed(String arg1) throws Throwable {
    alltabs_confirm.Confirm_ContactSupporttab();
    }


}
