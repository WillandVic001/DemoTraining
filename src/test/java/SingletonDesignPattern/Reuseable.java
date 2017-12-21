package SingletonDesignPattern;

import Util.ManageDriver;
import org.openqa.selenium.By;

public class Reuseable extends ManageDriver {
    // Int
    //String
    // Using fluent design pattern in Java : This mean making your code easy to ready and understand.
    public void Do_Click(String value) {
        driver.findElement(By.id(value)).click();
    }

    public void TextField1(String Id_locator, String senddata) {
        driver.findElement(By.id(Id_locator)).sendKeys(senddata);
    }

    public By bylocator(String Locator) {
        By result = null;
        if (Locator.startsWith("html")) {
            result = By.xpath((Locator));
        }
        else if (Locator.startsWith("#")){
            result = By.cssSelector(Locator);
        } else {
            result = By.id(Locator.replace("id=", ""));
        }
        return result;
    }
    public void TextField(String Id_locator, String senddata) {
        driver.findElement(bylocator(Id_locator)).sendKeys(senddata);
    }
}


/// What are dependencies is selenium framework with the file name POM.XML
//  This is the test resources required in building a franework.
