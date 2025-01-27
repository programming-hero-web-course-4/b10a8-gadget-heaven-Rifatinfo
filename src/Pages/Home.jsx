

import { useState } from "react";
import { Link, useLoaderData } from "react-router";

const Home = () => {
    const gadgets = useLoaderData();
    // console.log(gadgets);
    const [filteredItems, setFilteredItems] = useState(gadgets);

    const handleFilteringItem = (itemType) => {
        if (itemType === "All Accessories") {
            setFilteredItems(gadgets)
            return;
        }
        const filtered = gadgets.filter((item) => item.type === itemType);
        const sortedItemsType = [...filtered].sort((a, b) => b.price - a.price);
        // setFilteredItems(filtered);
        setFilteredItems(sortedItemsType);
    };
    return (
        <div className="">
            <div className="bg-[#9538E2] text-white text-center space-y-5 md:py-7 py-3 md:h-[650px] relative">
                <p className="font-bold md:text-5xl text-2xl">Upgrade Your Tech Accessorize with<br /> Gadget Heaven Accessories</p>
                <p>Explore the latest gadgets that will take your experience to the next level.<br/> From smart devices to the coolest accessories, we have it all!</p>
                <div>
                    <button className="btn btn-outline border-2 border-white text-white">Shop Now!</button>
                </div>
            </div>
            <div className="absolute z-10 md:top-80 top-[336px] md:left-28">
                <img className="mx-auto md:w-[1110px] md:h-[611px] rounded-lg" src="../../src/assets/banner.jpg" alt="" />
            </div>
            <div>
                <p className="text-center font-bold md:text-xl text-lg md:mt-80 md:mb-10 mt-60 mb-5">Explore Cutting-Edge Gadgets</p>
            </div>
            <div className="grid grid-cols-1 gap-2 md:flex md:gap-4  max-w-7xl mx-auto">
                <div className="w-full p-4 md:w-1/5 border shadow-lg rounded-lg">
                    <div className="md:grid md:grid-cols-1 md:gap-4 md:ml-8 grid grid-cols-2 gap-2">
                        <button onClick={() => handleFilteringItem("All Accessories")} className="btn btn-outline text-[#9538E2]">All Accessories</button>
                        <button onClick={() => handleFilteringItem("Laptops")} className="btn btn-outline text-[#9538E2]">Laptops</button>
                        <button onClick={() => handleFilteringItem("Phones")} className="btn btn-outline text-[#9538E2]">Phones</button>
                        <button onClick={() => handleFilteringItem("Accessories")} className="btn btn-outline text-[#9538E2]">Accessories</button>
                        <button onClick={() => handleFilteringItem("Smart Watches")} className="btn btn-outline text-[#9538E2]">Smart Watches</button>
                    </div>
                </div>
                <div className="w-full md:w-4/5 border  shadow-lg rounded-lg">
                    <div className="grid p-4 grid-cols-1 gap-3 md:grid-cols-3 md:grid-4">
                        {
                            filteredItems.map(gadget =>
                                <div key={gadget.id} className="card bg-base-100 shadow-xl">
                                    <figure>
                                        <img
                                            src={gadget.image}
                                            alt="" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{gadget.name}</h2>
                                        <p><span className="font-semibold">Price :</span> {gadget.price}</p>
                                        <div className="card-actions justify-start">
                                            <Link to={`/gadget/${gadget.id}`}>
                                                <button className="btn btn-outline text-[#9538E2]">View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;