package PageFactory;

import Util.ManageDriver;
import cucumber.api.DataTable;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class My_Scenario_Datatable_Page extends ManageDriver {

    @FindBy(id="usernamelogin")
    WebElement Username_field_locator;

    @FindBy(id="loginPassword")
    WebElement Password_field_locator;

    public My_Scenario_Datatable_Page(WebDriver driver){
        PageFactory.initElements(driver, this);
    }
     // count starts at 0 "Zero" in Object Oriented programming
    public void datatable_page(DataTable my_details){
        List<List<String >> data = my_details.raw();
        Username_field_locator.sendKeys(data.get(0).get(0));
        Password_field_locator.sendKeys(data.get(0).get(1));


    }



}
