import { Routes } from "@angular/router";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

const ROUTES: Routes = [
    { path: "SignUp", component: SignUpComponent },
    { path: "UserProfile", component: UserProfileComponent }
];

export { ROUTES };
