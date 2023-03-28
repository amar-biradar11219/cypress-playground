import { login_postive, login } from "../../methods/login/login_method";
import { navigation } from "../../methods/navigation/navigation";

const login_post = new login_postive()
const nav = new navigation()
it("login to website",()=>{
    nav.navigate()
    login_post.user_name()
})  