package PageFactory;

import Util.ManageDriver;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AllTabs extends ManageDriver {


    public AllTabs(){
        PageFactory.initElements(driver, this);
    }

    @FindBy(id="JustTradeTab")
    WebElement JustTradeTab;

    @FindBy(id="AboutUsTab")
    WebElement AboutusTab;

    @FindBy(id="ContactSupportTab")
    WebElement ContactSupportTab;

    @FindBy(id="TradeYourJetTab")
    WebElement TradeYourJetTab;

    @FindBy(id="BookYourJetTab")
    WebElement BookYourJetTab;


    public void ClickAllTabs(){
        JustTradeTab.click();
        AboutusTab.click();
        TradeYourJetTab.click();
        BookYourJetTab.click();
        ContactSupportTab.click();
    }

    public void  Confirm_ContactSupporttab() throws InterruptedException {
        Thread.sleep(3000);
        String ActualText = driver.getTitle();
        String ExpectedText = "Contact Support";
        Assert.assertEquals(ActualText, ExpectedText);
    }




}
