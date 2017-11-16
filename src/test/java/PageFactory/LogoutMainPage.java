package PageFactory;

import Util.ManageDriver;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LogoutMainPage extends ManageDriver {


    public LogoutMainPage(){
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "html/body/div[1]/section[1]/div[2]/a[2]")
    WebElement Logout_Link;




    public void Logoutlinktext() throws InterruptedException {
        Logout_Link.click();

    }

    public  void ConfirmloginPage () throws InterruptedException {
        Thread.sleep(5000);
        String getanything = driver.getTitle();
        String confirmanything = "Login";
        Assert.assertEquals(getanything, confirmanything);
    }






}
