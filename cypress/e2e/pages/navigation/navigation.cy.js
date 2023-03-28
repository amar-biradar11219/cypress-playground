import { navigation } from "../../methods/navigation/navigation.cy";

const nav = new navigation()

describe("navigation to the website",()=>{
    it("navigation to the website",()=>{
        nav.navigate()
    })

})