import { Before, After, BeforeStep, AfterStep, Status,AfterAll, BeforeAll } from "@cucumber/cucumber";
import { POManager } from "../pageObjects/POManager";
import { firefox, webkit, chromium, Browser } from "@playwright/test";

let browser:Browser;

Before(async function () {

    browser = await firefox.launch({ headless: false ,args: ["--start-maximized"] });
    const context = await browser.newContext();
    this.page = await context.newPage();

    this.poManager = new POManager(this.page);

});



BeforeStep( function()
{

});

AfterStep(async function({result})
{
  if(result.status==Status.PASSED)
  {
    await this.page.screenshot({path:'screenshot.png'});
  }
    
});


After(function()
{
    browser.close();
});