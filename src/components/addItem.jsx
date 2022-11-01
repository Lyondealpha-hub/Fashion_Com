import { useState } from "react";
import Navbar from "./includes/navbar";
import { Link, useNavigate } from "react-router-dom";
import './styles/addItem.css';
import './includes/styles/allstyles.css';
import axios from "axios";
import Swal from "sweetalert2";

const AddItem = () => {
    //navigator
    const navigate = useNavigate();

    //all states for input fields
    const[ID,setID] = useState('');
    const[divisionID,setDivisionID] = useState('');

    const[ItemTypeID,setItemTypeID] = useState('');
    const[AliasItemID,setAliasID] = useState('');
    const[itemCode,setItemCode] = useState('');
    const[itemName,setItemName] = useState('');

    const[ItemDescription,setItemDescription] = useState('');
    const[LongDescription,setLongDescription] = useState('');

    const[availableInventory,setAvailableInventory] = useState('');
    const[htsCode,sethtsCode] = useState('');

    const[year,setYear] = useState('');

    const[MSRP,setMSRP] = useState('');

    const[COG,setCOG] = useState('');
    const[OriginCountryID,SetOriginCountryID] = useState(0);

    const[supported,setSupported] = useState(false);
    const[active,setActive] = useState(false);

    const[CreatedByUserID,setCreatedByUserID] = useState('');
    const[LastUpdatedByUserID,setLastUpdatedByUserID] = useState('');

    const[productHierachy,setProductHierachy] = useState('');
    const[upcCode,setUpcCode] = useState('');
    const[OriginCountry,setOriginCountry] = useState('');
    
    const[weight,setWeight] = useState('');    
    const[width,setWidth] = useState('');
    const[height,setHeight] = useState('');

    const[depth,setDepth] = useState('');
    const[oversizeItem,setOversizeItem] = useState(false);

    const[TruckDelivery,setTruckDelivery] = useState(false);
    const[inventory,setInventory] = useState(false);
    const[IsDeleted,setIsDeleted] = useState(false);


    //button loading state
    const[loading,setloading] = useState(false);
    
    //form message handler
    const[msg,setmsg] = useState({state: '', text : '', theme : ''});
    
    const handleAddItem = async() =>{
        console.log(OriginCountryID);
        // form fields validation
        if ( ID ==='' || divisionID ==='' || ItemTypeID ==='' || AliasItemID ==='' || itemCode ==='' || itemName === '' || ItemDescription === '' || LongDescription ==='' || availableInventory === '' || MSRP === '' || LastUpdatedByUserID ==='' || OriginCountryID ==='' || OriginCountry ==='' || IsDeleted ==='' || CreatedByUserID ==='' || supported === '' || active === '' || COG === '' || htsCode === '' || weight === '' || depth === '' || width === '' || height === '' || oversizeItem === '' || inventory === '' || productHierachy === '' || upcCode === '') {
            Swal.fire({
                position: 'top',
                icon: 'warning',
                title: 'All Input fields required',
                showConfirmButton: false,
                timer: 1500
            })
        }
        // all validations passed
        else{
            setloading(true);

            //making a post request to backend
            const res = await axios.post(' http://localhost:7253/api/createItem',{
                ID : ID,
                DivisionID : divisionID,
                ItemTypeID : ItemTypeID,
                AliasItemID : AliasItemID,
                ItemCode : itemCode,
                ItemName : itemName,
                ItemDescription : ItemDescription,
                LongDescription : LongDescription,
                AvailableInventory : availableInventory,
                HtsCode : htsCode,
                Year : year,
                MSRP :MSRP,
                COG : COG,
                OriginalCountryID : OriginCountryID,
                Supported : supported,
                Active : active,
                CreatedByUserID : CreatedByUserID,
                LastUpdatedByUserID : LastUpdatedByUserID,
                ProductHierachy : productHierachy,
                UpcCode : upcCode,
                OriginCountry : OriginCountry,
                Weight : weight,
                Width : width,
                Height : height,
                Depth : depth,
                OversizeItem : oversizeItem,
                TruckDelivery : TruckDelivery,
                Inventory : inventory,
                IsDeleted : IsDeleted,
            })
            .catch((err)=>{
                setloading(false)
                //for error tracking purposes
                console.log(err);

                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: 'Something went wrong',
                    showConfirmButton: false,
                    timer: 1500
                })
            })

            console.log(res.data);
            if (res.data.status === 'Success') {
                setloading(false);

                await Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Item added successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                
                navigate('/allitems');
                
            }
        }
    }

    return (
        <div className="add-item">
            {/* navbar component */}
            <Navbar action={'All items'} url = {'/allitems'}/>

            {/* form section */}
            <form className="form" action="">
                {/* fields */}
                <div className="all-fields">
                    <h1>Add an item</h1>

                    {/* message box*/}
                    <div className="msg">
                        <p className={msg.theme}>{msg.text}</p>
                    </div>

                    {/* Input Fields */}
                    <section className="form-field">
                        <label htmlFor="itemid">Item ID</label>
                        <input onChange={(e) => setID(e.target.value)} type="number" name="itemid" id="itemid" placeholder="Item ID here..."/>
                    </section>

                    <section className="form-field">
                        <label htmlFor="divisionid">Division ID</label>
                        <input onChange={(e) => setDivisionID(e.target.value)} type="number" name="divisionid" id="divisionid" placeholder="Division ID here..."/>
                    </section>

                    <div className="flex">
                        <section className="form-field">
                            <label htmlFor="itemtypeid">Item Type ID</label>
                            <input onChange={(e) => setItemTypeID(e.target.value)} type="number" name="itemtypeid" id="itemtypeid" placeholder="Item Type ID here..."/>
                        </section>

                        <section className="form-field">
                            <label htmlFor="aliasitemid">Alias Item ID</label>
                            <input onChange={(e) => setAliasID(e.target.value)} type="number" name="aliasitemid" id="aliasitemid" placeholder="Alias Item ID here..."/>
                        </section>
                    </div>

                    <section className="form-field">
                        <label htmlFor="itemcode">Item Code</label>
                        <input onChange={(e) => setItemCode(e.target.value)} type="text" name="itemcode" id="itemcode" placeholder="Item Code here..."/>
                    </section>

                    <section className="form-field">
                        <label htmlFor="itemName">Item Name</label>
                        <input onChange={(e) => setItemName(e.target.value)} type="text" name="itemName" id="itemName" placeholder="E.g. Laptop..."/>
                    </section>

                    <section className="form-field">
                        <label htmlFor="description">Item Description</label>
                        <input onChange={(e) => setItemDescription(e.target.value)} type="text" name="description" id="description" placeholder="Describe item"/>
                    </section>

                    <section className="form-field">
                        <label htmlFor="longdescription">Item Long Description</label>
                        <input onChange={(e) => setLongDescription(e.target.value)} type="text" name="longdescription" id="longdescription" placeholder="Long Description"/>
                    </section>

                    <div className="flex">
                        <section className="form-field">
                            <label htmlFor="available">Available Inventory</label>
                            <input onChange={(e) => setAvailableInventory(e.target.value)} type="number" name="available" id="available" placeholder="Enter available..."/>
                        </section>

                        <section className="form-field">
                            <label htmlFor="htscode">HTS Code</label>
                            <input onChange={(e) => sethtsCode(e.target.value)} type="text" name="htscode" id="htscode" placeholder="Enter HTS Code"/>
                        </section>
                    </div>

                    <section className="form-field">
                        <label htmlFor="year">Year</label>
                        <input onChange={(e) => setYear(e.target.value)} type="number" name="year" id="year" placeholder="E.g. 2022"/>
                    </section>

                    <div className="flex">
                        <section className="form-field">
                            <label htmlFor="msrp">MSRP</label>
                            <input onChange={(e) => setMSRP(e.target.value)} type="number" name="msrp" id="msrp" placeholder="Enter MSRP ..."/>
                        </section>

                        <section className="form-field">
                            <label htmlFor="cog">COG</label>
                            <input onChange={(e) => setCOG(e.target.value)} type="number" name="cog" id="cog" placeholder="Enter COG"/>
                        </section>
                    </div>

                    <section className="form-field">
                        <label htmlFor="oci">Origin Country ID</label>
                        <input onChange={(e) => SetOriginCountryID(e.target.value)} type="number" name="oci" id="oci" placeholder="Origin country ID"/>
                    </section>

                    <div className="flex">
                        <section className="form-field">
                            <label className="center" htmlFor="supported">Supported?</label>
                            <input onChange={(e) => e.target.value === 'on' ? setSupported(true) : setSupported(false)} type="checkbox" name="supported" id="supported" placeholder="Yes or No?"/>
                        </section>

                        <section className="form-field">
                            <label className="center" htmlFor="active">Active?</label>
                            <input onChange={(e) => e.target.value === 'on' ? setActive(true) : setActive(false)} type="checkbox" name="active" id="active" placeholder="Yes or No?"/>
                        </section>
                    </div>

                    <section className="form-field">
                        <label htmlFor="cbui">Created By [User ID]</label>
                        <input onChange={(e) => setCreatedByUserID(e.target.value)} type="number" name="cbui" id="cbui" placeholder="Input here ..."/>
                    </section>

                    <div className="flex">
                        <section className="form-field">
                            <label htmlFor="lubui">Last Updated By [User ID]</label>
                            <input onChange={(e) => setLastUpdatedByUserID(e.target.value)} type="number" name="labui" id="labui" placeholder="Input here ..."/>
                        </section>

                        <section className="form-field">
                            <label htmlFor="producth">Product Hierachy</label>
                            <input onChange={(e) => setProductHierachy(e.target.value)} type="number" name="producth" id="producth" placeholder="Enter Product Hierachy"/>
                        </section>
                    </div>

                    <section className="form-field">
                        <label htmlFor="upc">Upc Code</label>
                        <input onChange={(e) => setUpcCode(e.target.value)} type="number" name="upc" id="upc" placeholder="Enter Upc code"/>
                    </section>

                    <section className="form-field">
                        <label htmlFor="originc">Origin Country</label>
                        <input onChange={(e) => setOriginCountry(e.target.value)} type="text" name="originc" id="originc" placeholder="Enter Origin Country"/>
                    </section>

                    <div className="flex3">
                        <section className="form-field">
                            <label htmlFor="weight">Weight</label>
                            <input onChange={(e) => setWeight(e.target.value)} type="number" name="weight" id="weight" placeholder="Enter weight"/>
                        </section>

                        <section className="form-field">
                            <label htmlFor="width">Width</label>
                            <input onChange={(e) => setWidth(e.target.value)} type="number" name="width" id="width" placeholder="Enter width"/>
                        </section> 

                        <section className="form-field">
                            <label htmlFor="height">Height</label>
                            <input onChange={(e) => setHeight(e.target.value)} type="number" name="height" id="height" placeholder="Enter height"/>
                        </section>
                    </div>
                    
                    <section className="form-field">
                        <label htmlFor="depth">Depth</label>
                        <input onChange={(e) => setDepth(e.target.value)} type="number" name="depth" id="depth" placeholder="Enter Depth"/>
                    </section>

                    <div className="flex4">
                        <section className="form-field">
                            <label className="center" htmlFor="oversizeitem">Oversize item?</label>
                            <input onChange={(e) => e.target.value === 'on' ? setOversizeItem(true) : setOversizeItem(false)} type="checkbox" name="oversizeitem" id="oversizeitem" placeholder="Enter oversize item"/>
                        </section>

                        <section className="form-field">
                            <label className="center" htmlFor="truckdelivery">Truck Delivery?</label>
                            <input onChange={(e) => e.target.value === 'on' ? setTruckDelivery(true) : setTruckDelivery(false)} type="checkbox" name="truckdelivery" id="truckdelivery" placeholder="Enter truck Delivery"/>
                        </section>

                        <section className="form-field">
                            <label className="center" htmlFor="inventory">Inventory?</label>
                            <input onChange={(e) => e.target.value === 'on' ? setInventory(true) : setInventory(false)} type="checkbox" name="inventory" id="inventory" placeholder="Enter inventory"/>
                        </section>

                        <section className="form-field">
                            <label className="center" htmlFor="deleted">Deleted?</label>
                            <input onChange={(e) => e.target.value === 'on' ? setIsDeleted(true) : setIsDeleted(false)} type="checkbox" name="deleted" id="deleted"/>
                        </section>
                    </div>

                    
                    {/* Submit button */}
                    <section className="form-button-container">
                        {!loading && <Link className="form-button" to = {''} onClick = {() => handleAddItem()}><i className="bi bi-plus-lg"></i> add</Link>}
                        {loading && <Link className="form-button" to = {''}>adding...</Link>}
                    </section>
                </div>
            </form>

        </div>
    );
}
 
export default AddItem;