package Util;


import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Calendar;

public class ManageDriver {
    public static WebDriver driver;

    public void set_driver(String browser) {
        if (driver == null) {
// == means equal  // null means nothing // driver is an object of Webdriver // Webdriver is a selenium library // Selenium Jave Library
// is build purely on Java, havnt say that selenium has different types according to the programming language you are using.


            if (browser.equalsIgnoreCase("firefox")) {
                System.setProperty("webdriver.gecko.driver", "C:\\Program Files\\drivers\\geckodriver.exe");
                driver = new FirefoxDriver();
            }
            if (browser.equalsIgnoreCase("chrome")) {
                System.setProperty("webdriver.chrome.driver", "C:\\Program Files\\drivers\\chromedriver.exe");
                driver = new ChromeDriver();
            } else if (browser.equalsIgnoreCase("opera")) {
                System.setProperty("webdriver.opera.driver", "C:\\Program Files\\drivers\\operadriver.exe");
                driver = new ChromeDriver();
            }
        }
    }

        public void TakeScreenShot(){
            String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime());
            File MyFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
            FileUtils.copyFile(MyFile, new File());
    }




    public void browser_setting() {
        driver.manage().window().maximize();
    }
    public void close_browser(){
       driver.quit();
        driver = null;
    }


}
