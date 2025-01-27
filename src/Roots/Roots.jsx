import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Nav/Navbar";
import Footer from "../Components/Footer/Footer";
import { ThreeDots } from "react-loader-spinner";

const Roots = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Navbar  />
            {
                navigation.state === "loading" ?
                    <>
                        <div className="flex justify-center items-center md:h-screen">
                            <div>
                                <ThreeDots
                                    visible={true}
                                    height="80"
                                    width="80"
                                    color="#4fa94d"
                                    radius="9"
                                    ariaLabel="three-dots-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                />
                            </div>
                        </div>
                    </> : <Outlet />
            }
            <Footer />
        </div>
    );
};

export default Roots;