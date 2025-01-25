import { RxCrossCircled } from "react-icons/rx";


const ReadList = ({phone, deleteBtnReadList}) => {
    console.log(phone);
    const {image, name, price, id} = phone;
    return (
        <div>
            <div className="flex justify-between gap-3 shadow-lg border rounded-xl p-2 md:w-[500px]">
                <div className=" flex gap-5 items-center">
                    <div>
                        <img src={image} alt="" />
                    </div>
                    <div>
                       <p className="font-bold text-xl">{name}</p>
                       <p className="font-semibold">Price :  {price}</p>
                    </div>
                </div>
                {/* delete */}
                                            <div><RxCrossCircled onClick={() => {deleteBtnReadList(id)}}
                className="text-red-700 text-2xl font-bold" /></div>
            </div>
        </div>
    );
};

export default ReadList;