package PageObjects;

import Util.ManageDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;

import static Util.ManageDriver.driver;

public class MousehoverPOM extends ManageDriver{


    public void MousehoverAboutUsTabs(){
        WebElement element = driver.findElement(By.cssSelector("#AboutUs>a"));
       Actions action = new Actions(driver);
       action.moveToElement(element).build().perform();


    }
}
