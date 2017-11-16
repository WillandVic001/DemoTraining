package PageObjects;

import InterfaceObj.MyFirstTestPage;
import Util.ManageDriver;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

public class MyFirstPage extends ManageDriver implements MyFirstTestPage {

    By UsernameTextField = By.id("usernamelogin");
    By PasswordTextField = By.id("loginPassword");
    By LoginButton = By.id("LoginBtn");
  //  By LogoutLink = By.linkText("html/body/div[1]/section[1]/div[2]/a[2]");
    By LogoutLink = By.linkText("Logout");


    String URL = "http://automatetillinfinity.co.uk/";
    String UsernameData = "wegit";
    String PasswordData = "12345678";


    public void BaseUrl() {
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get(URL);
    }

    public void Username() throws InterruptedException {

        driver.findElement(UsernameTextField).sendKeys(UsernameData);
    }

    public void Password() {

        driver.findElement(PasswordTextField).sendKeys(PasswordData);
    }

    public void ClickLogin() throws InterruptedException {
       // driver.findElement(LoginButton).click();
        WebDriverWait wait = new WebDriverWait(driver, 60);
        wait.until(ExpectedConditions.visibilityOfElementLocated(LoginButton));
        driver.findElement(LoginButton).click();
        System.out.println(DisplayedText);

    }

    public void ConfirmHomePage() throws InterruptedException {
        Thread.sleep(7000);
        String Actual = driver.getTitle();
        String Expected = "Home";
        Assert.assertEquals(Expected, Actual);
    }


public void pageOBJ_Logout() throws InterruptedException {
    driver.findElement(LogoutLink).click();
}
    // More re-usable class
    public void Send_Password( String password_keystosend){
        driver.findElement(PasswordTextField).sendKeys(password_keystosend);
    }

    public void Send_Username(String username_text){
        driver.findElement(UsernameTextField).sendKeys(username_text);
    }
}
    /*

    Access Modifiers in Java: this sre how an object can be access.
    We have 4 types of Access modifiers
    Public means the object is accessable from anywhere in the framework
    Private: Methods can only be access from the class only
    Protected: methods can only be access from the package
    Void: this is a defualt state means empty.

     */


