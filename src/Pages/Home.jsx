import { Link, useLoaderData} from "react-router";

const Home = () => {
    const gadgets = useLoaderData();
    console.log(gadgets);
    const {id} = gadgets;
    return (
        <div className="mt-10">
            <div className="border md:flex md:gap-4">
                <div className="w-1/5 border"></div>
                <div className="w-4/5 border">
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:grid-4">
                        {
                            gadgets.map(gadget => <>
                                <div className="card bg-base-100 shadow-xl">
                                    <figure>
                                        <img
                                            src="https://img.freepik.com/premium-photo/smartphone-smartwatch_44344-2220.jpg"
                                            alt="" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{gadget.phone_name}</h2>
                                        <p>Price : {gadget.price} TK</p>
                                        <div className="card-actions justify-start">
                                            <Link to={`/gadget/${gadget.id}`}>
                                                <button className="btn btn-outline text-[#9538E2]">View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;