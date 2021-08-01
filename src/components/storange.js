import About from "./about/About";
import Home from "./Home/home";
import Contact from "./Contact/Contact";
import TheNews from "./News/theNews";
import Portfolio from "./portfolio/Portfolio"



const Storage = {
    list: [
        { name: "Home", component: <Home /> },
        { name: "About", component: <About /> },
        { name: "Portfolio", component: <Portfolio /> },
        { name: "News", component: <TheNews /> },
        { name: "Contact", component: <Contact /> },

    ],

    naw: "NAWSHAD",

    copyRight: "© 2021 Tokyo  Created by Ib-Themes",

    card: [
        { title: "cats can be happy too", text: "cats can be happy too", pic: "https://i.postimg.cc/Z5xwtd2h/833202cfe17feeea0729b547c416e28b.jpg", date: "By Nawshad Othman / on 28 jun 2021" },
        { title: "Why do cats love catnip", text: "Why do cats love catnip", pic: "https://i.postimg.cc/cC3cDgw2/HD-cat-background-pics-wallpaper.jpg", date: "By Nawshad Othman / on 28 jun 2021" },
        { title: "Why you should worry about your pet’s ecological footprint", text: "cats can be happy too", pic: "https://i.postimg.cc/FRyRDh1G/kotenok-milyi-fon.jpg", date: "By Nawshad Othman / on 28 jun 2021" },
        { title: "Cats are believed to be the only mammals who don't taste sweetness", text: "cats can be happy too", pic: "https://i.postimg.cc/XY1yCNyC/cUb9jz.jpg", date: "By Nawshad Othman / on 28 jun 2021" },
    ],

    portPic: [{ photo: "https://i.postimg.cc/DzM7dK29/IMG-2143.jpg" },
    { photo: "https://i.postimg.cc/DzM7dK29/IMG-2143.jpg" },
    { photo: "https://i.postimg.cc/DzM7dK29/IMG-2143.jpg" },
    { photo: "https://i.postimg.cc/DzM7dK29/IMG-2143.jpg" }],
}
export default Storage;