package PageFactory;

import Util.ManageDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookYourJetPage extends ManageDriver {

    public BookYourJetPage(){
        PageFactory.initElements(driver, this);
    }

    @FindBy(id = "BookYourJetTab")
    WebElement ClickBookYourJetNavBar;

    @FindBy(id = "q1")
    WebElement StartDestination;

    @FindBy(id = "q2")
    WebElement EndDestination;

    @FindBy(id = "a1")
    WebElement Submit_Button;



    public void Click_BookYourJet_NavBar(){
        ClickBookYourJetNavBar.click();
    }

    public void Start_Destination(){
        StartDestination.sendKeys("Monaco");
    }

    public void End_Destination(){
        EndDestination.sendKeys("Necker");
    }

    public void Click_Submit_Button(){
        Submit_Button.click();
    }

    public void Click_Time_Zone(){

    }

    // xpath for message   html/body/div[1]/section[2]/div[2]/div/div[1]





}
