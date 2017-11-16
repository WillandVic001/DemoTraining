package PageObjects;

import Util.ManageDriver;
import org.openqa.selenium.By;

public class RegisterPage extends ManageDriver {

    By RegisterButton    = By.id("reg_login");
    By SubmitButton      = By.id("submitbtn");
    By EmailTextField    = By.name("email");
    By UserNameTexField  = By.id("username");
    By PasswordTextField = By.cssSelector("#pwd");
    By Conf_PasswordTextField = By.xpath("html/body/div[1]/section[2]/div/div[2]/div/form/div[4]/div/input");

// Next class we shall have a look at page factory and the types of xpath we have.

public void ClickSubmitButton(){
    driver.findElement(SubmitButton).click();
}

public void ClickRegisterButton(){
    driver.findElement(RegisterButton).click();

   }
public void EnterEmail() {
       driver.findElement(EmailTextField).sendKeys("AUDI0481@gmail.com");

   }
public void EnterUsername() {
    driver.findElement(UserNameTexField).sendKeys("Reloaded0481");

}
public void EnterPassword() {
    driver.findElement(PasswordTextField).sendKeys("12345678");

}
public void EnterConfirmPassword(){
    driver.findElement(Conf_PasswordTextField).sendKeys("12345678");
}

}



