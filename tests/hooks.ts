import { Before, After, BeforeStep, AfterStep, Status } from "@cucumber/cucumber";
import { POManager } from "../pageObjects/POManager";
import { firefox, webkit, chromium, Browser } from "@playwright/test";

let browser:Browser;

Before(async function () {

    browser = await firefox.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();

    this.poManager = new POManager(this.page);

});



BeforeStep( function()
{

});

AfterStep(async function({result})
{
  if(result.status==Status.FAILED)
  {
    await this.page.screenshot({path:'screenshot.png'});
  }
    
});


After(function()
{
    browser.close();
});