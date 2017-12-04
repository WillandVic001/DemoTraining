package StepDef;

import PageObjects.MousehoverPOM;
import cucumber.api.java.en.Given;

public class Mousehoverstepdef {

    MousehoverPOM Mousehover_Nav = new MousehoverPOM();


    @Given("^I  hover the mouse \"([^\"]*)\" nav bar$")
    public void i_hover_the_mouse_nav_bar(String arg1) throws Throwable {
        Thread.sleep(3000);
        Mousehover_Nav.MousehoverAboutUsTabs();
        Thread.sleep(3000);
        Mousehover_Nav.MousehoverContactUsTab();
        Thread.sleep(3000);

        // Assignment: please write a mouse hover action on 3 more tabs.
    }

}

