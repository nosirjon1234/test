import { createRouter,createMemoryHistory } from "vue-router"; 
import home from "./../components/pages/Home.vue"
import Shop from "./../components/pages/Shop.vue"
import Contact from "../components/pages/contact.vue";
import Why from "../components/pages/why.vue"
import Test from "../components/pages/Testimonial.vue"
import login from "../components/pages/login.vue";

const routes =[
 {
    path:"/",
    name: "home",
    component: home
 },

 {
    path:"/shop",
    name: "shop",
    component: Shop
 },
 {
   path:"/contact",
   name: "contact",
   component: Contact
},
 {
   path:"/Why",
   name: "why",
   component: Why
},
{
   path:"/Testimonial",
   name: "Testimonial",
   component: Test
},
{
   path:"/login",
   name: "login",
   component: login
},
]


const router = createRouter({
    history:createMemoryHistory(),
    routes
})
export default router