import { RiAccountCircleLine } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";
import { BsHandbag, BsQuestionCircle } from "react-icons/bs";


export const Popups = () => {
    const accountsData = [
        {
            id: "45s5s5",
            account: "My Account",
            icons: "RiAccountCircleLine"
        },
        {
            id: "45sdf5gdf5",
            account: "My Order",
            icons: "BsHandbag"
        },
        {
            id: "45s5sdsfdsfdfds5",
            account: "Return Informations",
            icons: "BsQuestionCircle"
        },
        {
            id: "ayushtwiskx4w",
            account: "Contact Prefrence",
            icons: "MdOutlineMessage"
        },
        
    ]
    const accoIcons = {
        "RiAccountCircleLine" : <RiAccountCircleLine />,
        "MdOutlineMessage" : <MdOutlineMessage />,
        "BsQuestionCircle" : <BsQuestionCircle />,
        "BsHandbag" : <BsHandbag />,
    }
    return (
        <section>
            <div className="bg-white dark:bg-gray-700 p-4 w-full">
                <p>Signup | Login</p>
                <hr />
                <div className="flex flex-col gap-3 mt-4">
                {
                    accountsData.map((item) => (
                        <div key={item.id} className="flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-lg cursor-pointer">
                            <p>{accoIcons[item.icons]}</p>
                            <p className="text-[14px]">{item.account}</p>
                        </div>
                    ))
                }
                </div>
            </div>
        </section>
    )
}