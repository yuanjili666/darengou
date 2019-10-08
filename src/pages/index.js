import Loadable from "react-loadable"
import Loading from  "@common/loading";

const Home = Loadable({loader:()=>import("./home"),loading:Loading})

const Classify = Loadable({loader:()=>import("./classify"),loading:Loading})

const Collect = Loadable({loader:()=>import("./collect"),loading:Loading})

const Mine = Loadable({loader:()=>import("./mine"),loading:Loading})

const Nine = Loadable({loader:()=>import("./nine"),loading:Loading})

const Login = Loadable({loader:()=>import("./login"),loading:Loading})

const Register = Loadable({loader:()=>import("./register"),loading:Loading})

const Productlist = Loadable({loader:()=>import("./productlist"),loading:Loading})

const Details=Loadable({loader:()=>import("./details"),loading:Loading})

const Shangjia=Loadable({loader:()=>import("./shangjia"),loading:Loading})


export{
    Home,
    Classify,
    Collect,
    Mine,
    Nine,
    Login,
    Register,
    Productlist,
    Details,
    Shangjia
  
}