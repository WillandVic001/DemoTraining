package StepDef;

import PageObjects.MyFirstPage;
import cucumber.api.java.en.When;

public class ExampleTableScenarioStepDef {

    MyFirstPage ExamplesScenario_Obj = new MyFirstPage();

    @When("^I enter my \"([^\"]*)\" as \"([^\"]*)\"$")
    public void i_enter_my_as(String value1, String value2) throws Throwable {
        switch (value1) {

            case "Username":
                ExamplesScenario_Obj.Send_Username(value2);
                Thread.sleep(2000);
                break;
            case "Password":
                ExamplesScenario_Obj.Send_Password(value2);
                Thread.sleep(2000);
                break;
            default:  System.out.println("Obj username not found");
                break;

      /*  if (username_keystosend.equalsIgnoreCase(("Username"))) {
            ExamplesScenario_Obj.Send_Username(username_keystosend);
        } else {
            System.out.println("Obj username not found");
        }*/
        }

    }


}
