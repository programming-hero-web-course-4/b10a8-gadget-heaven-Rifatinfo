import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../../Utility/localstorage";
import ReadList from "./ReadList";

const Dashboard = () => {
    const [readListPhone, setReadListPhone] = useState([]);
    const [WishListPhone, setWishListPhone] = useState([]);
    const allPhones = useLoaderData();
    console.log(allPhones);

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedWishList = getStoredWishList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        const storedWishListInt = storedWishList.map(id => parseInt(id));
        console.log(storedReadList, allPhones, storedReadListInt, storedWishListInt);

        const readList = allPhones.filter(phone => storedReadListInt.includes(phone.id));
        const WishList = allPhones.filter(phone => storedWishListInt.includes(phone.id));
        console.log(readList);
        setReadListPhone(readList);
        setWishListPhone(WishList);
    }, []);

    const deleteBtnReadList = id =>{
        const remove = readListPhone.filter(phone => phone.id != id);
        setReadListPhone(remove);
    }
   

    return (
        <div>
            <div className="h-60 border w-full bg-[#9538E2]">
                <div className="text-center text-white space-y-4 mt-3">
                    <p className="md:text-2xl text-xl">Dashboard</p>
                    <p className="text-sm md:text-lg">
                        Explore the latest gadgets that will take your experience to the
                        next level. From smart <br /> devices to the coolest accessories, we
                        have it all!
                    </p>
                </div>

                {/* React Tabs */}
                <div className="text-center mt-5 max-w-6xl mx-auto">
                    <Tabs className="md:ml-[460px] ml-12">
                        <TabList className="flex gap-3">
                            <Tab className="border-2 px-8 py-2 rounded-xl border-white">
                                Cart
                            </Tab>
                            <Tab className="border-2 px-8 py-2 rounded-xl border-white">
                                WishList
                            </Tab>
                        </TabList>

                        {/* Tab Panels */}
                        <div className="mt-52 md:mr-96 mr-10">
                            <TabPanel>
                                <div className="grid grid-cols-1 gap-3">
                                    {
                                        readListPhone.map(phone => <ReadList deleteBtnReadList={deleteBtnReadList}  key={phone.id} phone={phone}></ReadList>)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="grid grid-cols-1 gap-3">
                                    {WishListPhone.map(phone => <ReadList  key={phone.id} phone={phone}></ReadList>)}
                                </div>
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </div>

            {/* sorting */}
            <div className="md:flex md:justify-between md:items-center grid-cols-1 mt-5 max-w-6xl mx-auto p-1">
                <p className="text-xl font-bold">Cart : {readListPhone.length}</p>
                <div className="flex gap-3 items-center">
                    <div><p className="font-bold text-sm md:text-lg">Total Price <span>74646</span></p></div>
                    <button className="px-1 py-[6px] md:py-2 md:px-4 border-2 border-[#9538E2] text-[#9538E2] rounded-xl font-medium text-sm md:text-[16px]">sort by price</button>
                    <button className="px-2 py-2 md:py-2 md:px-3 border rounded-xl bg-[#9538E2] text-white text-sm md:text-[16px]">purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
