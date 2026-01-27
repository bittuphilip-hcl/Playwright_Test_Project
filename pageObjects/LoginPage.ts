import{Page,Locator} from '@playwright/test';

export class LoginPage
{
    page: Page;
    userName: Locator;
    password: Locator;
    sigInBtn: Locator;


    constructor(page: any)
    {
        this.page=page;
        this.userName = page.locator('input[id="user-name"]');
        this.password = page.locator('input[id="password"]');
        this.sigInBtn = page.locator('input[id="login-button"]');

    }

    async validLogin(username: string, password: string) {
        await this.userName.fill(username);
        //password
        await this.password.fill(password);
        //sign in btn
        await this.sigInBtn.click();
    }

      async goTo() {
        await this.page.goto("https://www.saucedemo.com/");
        await this.page.waitForLoadState("networkidle");

    }


}