package StepDef;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty", "html:target/cucumber",
                            "json:target/cucumber-report.json"},
                             features = {"./src/test/resources/"},
                              glue = {"StepDef"},
                              tags = {"~@wip", "@TestCompleted"}
                             )

public class RunnerClass {
}
