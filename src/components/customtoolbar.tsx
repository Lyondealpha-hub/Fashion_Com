import React from "react"
import  {VscNewFile} from 'react-icons/vsc';
import {ImShare} from 'react-icons/im'
import  {FaEdit, FaUserTie, FaUsers,FaUserCog} from 'react-icons/fa';
import {AiFillSwitcher,AiOutlineProfile,AiFillPrinter} from 'react-icons/ai';
import  { HiRefresh } from 'react-icons/hi'
import {IoIosSwitch} from 'react-icons/io';
import 'devextreme/dist/css/dx.light.css';
import { Pager,Paging } from 'devextreme-react/data-grid';
import { icons } from "react-icons";
import DropDownButton from 'devextreme-react/drop-down-button';
import Switch from 'devextreme-react/switch';
import DateBox from 'devextreme-react/date-box';
import { CheckBox } from 'devextreme-react/check-box';


export const CustomToolbar = ()=>{
    return (
        <div className="w-full h-full flex justify-evenly mt-10 bg-slate-300">
            <div className="  w-2/6 ">
                <ul className="flex justify-evenly w-full items-center self-start">
                    <li><VscNewFile size={25}/></li>
                    <li><FaEdit size={25}/></li>
                    <li><IoIosSwitch size={25}/></li>
                    <li><AiFillSwitcher size={25}/></li>
                    <li>
                        <Switch width={60} defaultValue={true} height={40} />
                    </li>
                    <li><FaUserTie size={25}/></li>
                    <li><AiOutlineProfile size={25}/></li>
                    <li><FaUsers size={25}/></li>
                    <li><FaUserCog size={25}/></li>


                </ul>      

            </div>

            <div className="w-4/6 ">
                    <ul className="flex justify-evenly w-full  items-center self-end">
                        <li><ImShare size={25}/></li>
                        <li className="items-right justify-items-end">
                        <DropDownButton
                            text="Name"
                            icon="user"
                            items={data}
                            keyExpr="id"
                            displayExpr="text"
                            width={250}
                            className="items-right"
            />
                        </li>

                        <li>
                            <input className="b border-2 pl-1" type='text' placeholder="Search text..." />
                        </li>
                        <li>
                            <DateBox type="date" width={110} />
                        </li>
                        <li>
                            <DateBox type="date" width={110} />
                        </li>
                        <li>
                            <CheckBox
                                
                                hint="show status"
                                iconSize="20"
                            />
                        </li>

                        <li><HiRefresh size={25}/></li>
                        <li><AiFillPrinter size={25}/></li>
                    </ul>
            </div>
        </div>
    )
};

const data = [
    { id: 1, text: "Task", },
    { id: 2, text: "Progress Activity",  },
    { id: 3, text: "Task & Start Date",  },
    { id: 4, text: "Task & Completion Date",  },
    { id: 5, text: "Task & Due Date", },
    { id: 6, text: "Progress Activity & Start Date", },
    { id: 7, text: "Progress Activity & Completion Date",  },
    { id: 8, text: "Progress Activity & Due Date", },
    { id: 9, text: "Status", },
    { id: 10, text: "Status & Start Date", },
    { id: 11, text: "Status & Completion Date", },
    { id: 12, text: "Status & Due Date", },
    { id: 13, text: "Priority", },
    { id: 14, text: "Priority & Start Date", },
    { id: 15, text: "Priority & Completion Date", },
    { id: 16, text: "Priority & Due Date", },
    { id: 17, text: "Assigned By", },
    { id: 18, text: "Assigned By & Start Date", },
    { id: 19, text: "Assigned By & Completion Date", },
    { id: 20, text: "Assigned By & Due Date", },
    { id: 21, text: "Assigned To", },
    { id: 22, text: "Assignred To & Start Date", },
    { id: 23, text: "Assigned To & Completion Date", },
    { id: 24, text: "Assigned To & Due Date", },
];