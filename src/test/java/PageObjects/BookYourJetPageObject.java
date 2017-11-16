package PageObjects;

import Util.ManageDriver;
import org.junit.Assert;
import org.openqa.selenium.By;

public class BookYourJetPageObject extends ManageDriver {

    By Dropdown_List1 = By.id("q15");
    By ConfirmText_BookYourJetPage = By.cssSelector(".content>form>p");
    String Confirm_Book_Your_Jet_Page = "Thank you for completing the form. We shall get back to you soonest.";


    public void SelectDropdown(){
        driver.findElement(Dropdown_List1).click();
    }

    public void ConfirmBookYourJetPage_Displayed(){
      String ActualText =  driver.findElement(ConfirmText_BookYourJetPage).getText();
      String ExpectedText = Confirm_Book_Your_Jet_Page;
        Assert.assertEquals(ActualText,ExpectedText);

    }

}
