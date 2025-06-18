import {LoginPage} from "./auth/login-page";
import {LandingPage} from "./pre-auth/landing-page";
import {Profiles} from "./post-auth/profiles";
import {Homepage} from "./post-auth/homepage";

export class Suitest{
    readonly loginPage: LoginPage;
    readonly landingPage: LandingPage;
    readonly profiles: Profiles
    readonly homepage: Homepage

    constructor(){
        this.loginPage = new LoginPage();
        this.landingPage = new LandingPage();
        this.profiles = new Profiles();
        this.homepage = new Homepage();
    }

}