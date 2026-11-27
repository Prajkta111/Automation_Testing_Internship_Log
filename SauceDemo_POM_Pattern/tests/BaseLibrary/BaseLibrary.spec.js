export class Baseclass{
    constructor(page){
        this.page=page;
    }
    async launchbrowser(url){
        await this.page.goto(url);
    }
    async closebrowser(){
        await this.page.close();
    }
}