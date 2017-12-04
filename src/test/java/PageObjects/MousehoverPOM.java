package PageObjects;

import Util.ManageDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;

import static Util.ManageDriver.driver;

public class MousehoverPOM extends ManageDriver{

    By AboutUsTablocator = By.id("AboutUsTab");
    By ContactUsTablocator = By.id("ContactSupportTab");


    public void MousehoverAboutUsTabs(){
WebElement mousehoverelement = driver.findElement(AboutUsTablocator);
Actions action = new Actions (driver);
action.moveToElement(mousehoverelement).build().perform();
    }

    public void MousehoverContactUsTab(){
        WebElement mousehovercontactuselement = driver.findElement(ContactUsTablocator);
        Actions action = new Actions (driver);
        action.moveToElement(mousehovercontactuselement).build().perform();
    }
}
