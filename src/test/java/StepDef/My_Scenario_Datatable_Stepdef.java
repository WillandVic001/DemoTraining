package StepDef;

import PageFactory.My_Scenario_Datatable_Page;
import cucumber.api.DataTable;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;

import java.util.List;

import static Util.ManageDriver.driver;

public class My_Scenario_Datatable_Stepdef {
    My_Scenario_Datatable_Page My_SD_Obj = new My_Scenario_Datatable_Page(driver);

    @When("^I enter my Username and Password details as below$")
    public void i_enter_my_Username_and_Password_details_as_below(DataTable my_details) throws Throwable {
        My_SD_Obj.datatable_page(my_details);
    }
}
