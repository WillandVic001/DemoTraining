package StepDef;

import PageObjects.MousehoverPOM;
import cucumber.api.java.en.Given;

public class Mousehoverstepdef {

    MousehoverPOM Mousehover_Nav = new MousehoverPOM();


    @Given("^I mouse hover \"([^\"]*)\" nav bar$")
    public void i_mouse_hover_nav_bar(String arg1) throws Throwable {
        Thread.sleep(2000);
        Mousehover_Nav.MousehoverAboutUsTabs();
        Thread.sleep(2000);

    }
}
