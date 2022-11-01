import { useState } from "react";
import Navbar from "./includes/navbar";
import { Link,useNavigate,useParams } from "react-router-dom";
import './styles/addItem.css';
import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";

const UpdateItem = () => {
    //retrieving params
    const {id} = useParams()

    //navigator
    const navigate = useNavigate();

    //all states for input fields
    const[ID,setID] = useState();
    const[divisionID,setDivisionID] = useState();

    const[ItemTypeID,setItemTypeID] = useState();
    const[AliasItemID,setAliasID] = useState();
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


    // set all values
    const setAllValues = () =>{
        setID(itemData.id);
        setDivisionID(itemData.divisionID);
        setItemTypeID(itemData.itemTypeID);
        setAliasID(itemData.aliasItemID);
        setItemCode(itemData.itemCode);
        setItemName(itemData.itemName);
        setItemDescription(itemData.itemDescription);
        setLongDescription(itemData.longDescription);
        setAvailableInventory(itemData.availableInventory);
        sethtsCode(itemData.htsCode);
        setYear(itemData.year);
        setMSRP(itemData.msrp);
        setCOG(itemData.cog);
        SetOriginCountryID(itemData.originalCountryID);
        setSupported(itemData.supported);
        setActive(itemData.active);
        setCreatedByUserID(itemData.createdByUserID);
        setLastUpdatedByUserID(itemData.lastUpdatedByUserID);
        setProductHierachy(itemData.productHierachy);
        setUpcCode(itemData.upcCode);
        setOriginCountry(itemData.originCountry);
        setWeight(itemData.weight);
        setWidth(itemData.weight);
        setHeight(itemData.height);
        setDepth(itemData.depth);
        setOversizeItem(itemData.oversizeItem);
        setTruckDelivery(itemData.truckDelivery);
        setInventory(itemData.inventory);
        setIsDeleted(itemData.isDeleted);
    }

    // item data holder
    const[itemData,setItemData] = useState()

    //button loading state
    const[loading,setloading] = useState(false);
    
    //form message handler
    const[msg,setmsg] = useState({state: '', text : '', theme : ''});
    

    //fetch current item data
    useEffect(()=>{
        const fetchitems = async() =>{
            const res = await axios.get(`http://localhost:7253/api/getItem/${id}`)
            .catch(async(err)=>{
                // for error track purposes
                console.log(err);

                setmsg({state : false})
            })

            setItemData(res.data.data);
        }
        fetchitems();
    },[])

    const handleUpdateItem = async() =>{        
        setloading(true);
        //making a post request to backend
        const res = await axios.put(`http://localhost:7253/api/updateItem`,{
            ID : id,
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

        if (res.data.status === 'Success') {
            setloading(false);

            await Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Item updated successfully',
                showConfirmButton: false,
                timer: 2000
            })
            
            // navigate('/allitems');
        }
        
        
    }
    return (
        <div className="add-item">
            {/* navbar component */}
            <Navbar action={'Back'} url = {'/allitems'}/>

            {/* form section */}
            <form className="form" action="">
                {/* fields */}
                <div className="all-fields">
                    <h1>Update item</h1>

                    <div className="set-all">
                        <Link to={''} onClick ={()=> setAllValues()}>Set all</Link>
                    </div>

                    {/* message box*/}
                    <div className="msg">
                        <p className={msg.theme}>{msg.text}</p>
                    </div>

                    {/* Input Fields */}
                    <section className="form-field">
                        <label htmlFor="divisionid">Update Division ID : {(itemData) && itemData.divisionID} <Link onClick={()=> setDivisionID(itemData.divisionID)} to={''} className = 'setvalue'>Set value</Link></label>
                        <input defaultValue={divisionID} onChange={(e) => setDivisionID(e.target.value)} type="number" name="divisionid" id="divisionid" placeholder="Division ID here..."/>
                    </section>

                    <div className="flex">
                        <section className="form-field">
                            <label htmlFor="itemtypeid">Update Item Type ID : {itemData && itemData.itemTypeID} <Link onClick={()=> setItemTypeID(itemData.itemTypeID)} to={''} className = 'setvalue'>Set value</Link></label>
                            <input defaultValue={ItemTypeID} onChange={(e) => setItemTypeID(e.target.value)} type="number" name="itemtypeid" id="itemtypeid" placeholder="Item Type ID here..."/>
                        </section>

                        <section className="form-field">
                            <label htmlFor="aliasitemid">Update Alias Item ID : {itemData && itemData.aliasItemID} <Link onClick={()=> setAliasID(itemData.aliasItemID)} to={''} className = 'setvalue'>Set value</Link></label>
                            <input defaultValue={AliasItemID} onChange={(e) => setAliasID(e.target.value)} type="number" name="aliasitemid" id="aliasitemid" placeholder="Alias Item ID here..."/>
                        </section>
                    </div>

                    <section className="form-field">
                        <label htmlFor="itemcode">Update Item Code : {itemData && itemData.itemCode} <Link onClick={()=> setItemCode(itemData.itemCode)} to={''} className = 'setvalue'>Set value</Link></label>
                        <input defaultValue={itemCode} onChange={(e) => setItemCode(e.target.value)} type="text" name="itemcode" id="itemcode" placeholder="Item Code here..."/>
                    </section>

                    <section className="form-field">
                        <label htmlFor="itemName">Update Item Name : {itemData && itemData.itemName} <Link onClick={()=> setItemName(itemData.itemName)} to={''} className = 'setvalue'>Set value</Link></label>
                        <input defaultValue={itemName} onChange={(e) => setItemName(e.target.value)} type="text" name="itemName" id="itemName" placeholder="E.g. Laptop..."/>
                    </section>

                    <section className="form-field">
                        <label htmlFor="description">Update Item Description : {itemData && itemData.itemDescription} <Link onClick={()=> setItemDescription(itemData.itemDescription)} to={''} className = 'setvalue'>Set value</Link></label>
                        <input defaultValue={ItemDescription} onChange={(e) => setItemDescription(e.target.value)} type="text" name="description" id="description" placeholder="Describe item"/>
                    </section>

                    <section className="form-field">
                        <label htmlFor="longdescription">Update Item Long Description : {itemData && itemData.longDescription} <Link onClick={()=> setLongDescription(itemData.longDescription)} to={''} className = 'setvalue'>Set value</Link></label>
                        <input defaultValue={LongDescription} onChange={(e) => setLongDescription(e.target.value)} type="text" name="longdescription" id="longdescription" placeholder="Long Description"/>
                    </section>

                    <div className="flex">
                        <section className="form-field">
                            <label htmlFor="available">Update Available Inventory : {itemData && itemData.availableInventory} <Link onClick={()=> setAvailableInventory(itemData.availableInventory)} to={''} className = 'setvalue'>Set value</Link></label>
                            <input defaultValue={availableInventory} onChange={(e) => setAvailableInventory(e.target.value)} type="number" name="available" id="available" placeholder="Enter available..."/>
                        </section>

                        <section className="form-field">
                            <label htmlFor="htscode">Update HTS Code : {itemData && itemData.htsCode} <Link onClick={()=> sethtsCode(itemData.htsCode)} to={''} className = 'setvalue'>Set value</Link></label>
                            <input defaultValue={htsCode} onChange={(e) => sethtsCode(e.target.value)} type="text" name="htscode" id="htscode" placeholder="Enter HTS Code"/>
                        </section>
                    </div>

                    <section className="form-field">
                        <label htmlFor="year">Update Year : {itemData && itemData.year} <Link onClick={()=> setYear(itemData.year)} to={''} className = 'setvalue'>Set value</Link></label>
                        <input defaultValue={year} onChange={(e) => setYear(e.target.value)} type="number" name="year" id="year" placeholder="E.g. 2022"/>
                    </section>

                    <div className="flex">
                        <section className="form-field">
                            <label htmlFor="msrp">Update MSRP : {itemData && itemData.msrp} <Link onClick={()=> setMSRP(itemData.msrp)} to={''} className = 'setvalue'>Set value</Link></label>
                            <input defaultValue={MSRP} onChange={(e) => setMSRP(e.target.value)} type="number" name="msrp" id="msrp" placeholder="Enter MSRP ..."/>
                        </section>

                        <section className="form-field">
                            <label htmlFor="cog">Update COG  : {itemData && itemData.cog} <Link onClick={()=> setCOG(itemData.cog)} to={''} className = 'setvalue'>Set value</Link></label>
                            <input defaultValue={COG} onChange={(e) => setCOG(e.target.value)} type="number" name="cog" id="cog" placeholder="Enter COG"/>
                        </section>
                    </div>

                    <section className="form-field">
                        <label htmlFor="oci">Update Origin Country ID : {itemData && itemData.originalCountryID} <Link onClick={()=> SetOriginCountryID(itemData.originalCountryID)} to={''} className = 'setvalue'>Set value</Link></label>
                        <input defaultValue={OriginCountryID} onChange={(e) => SetOriginCountryID(e.target.value)} type="number" name="oci" id="oci" placeholder="Origin country ID"/>
                    </section>

                    <div className="flex">
                        <section className="form-field">
                            <label className="center" htmlFor="supported">Update Supported?  : {itemData && itemData.supported} <Link onClick={()=> setSupported(itemData.supported)} to={''} className = 'setvalue'>Set value</Link></label>
                            <input defaultValue={supported} onChange={(e) => e.target.value === 'on' ? setSupported(true) : setSupported(false)} type="checkbox" name="supported" id="supported" placeholder="Yes or No?"/>
                        </section>

                        <section className="form-field">
                            <label className="center" htmlFor="active">Update Active?  : {itemData && itemData.active} <Link onClick={()=> setActive(itemData.active)} to={''} className = 'setvalue'>Set value</Link></label>
                            <input defaultValue={active} onChange={(e) => e.target.value === 'on' ? setActive(true) : setActive(false)} type="checkbox" name="active" id="active" placeholder="Yes or No?"/>
                        </section>
                    </div>

                    <section className="form-field">
                        <label htmlFor="cbui">Update Created By [User ID] : {itemData && itemData.createdByUserID} <Link onClick={()=> setCreatedByUserID(itemData.createdByUserID)} to={''} className = 'setvalue'>Set value</Link></label>
                        <input defaultValue={CreatedByUserID} onChange={(e) => setCreatedByUserID(e.target.value)} type="number" name="cbui" id="cbui" placeholder="Input here ..."/>
                    </section>

                    <div className="flex">
                        <section className="form-field">
                            <label htmlFor="lubui">Update Last Updated By [User ID] : {itemData && itemData.lastUpdatedByUserID} <Link onClick={()=> setLastUpdatedByUserID(itemData.lastUpdatedByUserID)} to={''} className = 'setvalue'>Set value</Link></label>
                            <input defaultValue={LastUpdatedByUserID} onChange={(e) => setLastUpdatedByUserID(e.target.value)} type="number" name="labui" id="labui" placeholder="Input here ..."/>
                        </section>

                        <section className="form-field">
                            <label htmlFor="producth">Update Product Hierarchy : {itemData && itemData.productHierarchy} <Link onClick={()=> setProductHierachy(itemData.productHierarchy)} to={''} className = 'setvalue'>Set value</Link></label>
                            <input defaultValue={productHierachy} onChange={(e) => setProductHierachy(e.target.value)} type="number" name="producth" id="producth" placeholder="Enter Product Hierachy"/>
                        </section>
                    </div>

                    <section className="form-field">
                        <label htmlFor="upc">Update Upc Code : {itemData && itemData.upcCode} <Link onClick={()=> setUpcCode(itemData.upcCode)} to={''} className = 'setvalue'>Set value</Link></label>
                        <input defaultValue={upcCode} onChange={(e) => setUpcCode(e.target.value)} type="number" name="upc" id="upc" placeholder="Enter Upc code"/>
                    </section>

                    <section className="form-field">
                        <label htmlFor="originc">Update Origin Country : {itemData && itemData.originCountry} <Link onClick={()=> setOriginCountry(itemData.originCountry)} to={''} className = 'setvalue'>Set value</Link></label>
                        <input defaultValue={OriginCountry} onChange={(e) => setOriginCountry(e.target.value)} type="text" name="originc" id="originc" placeholder="Enter Origin Country"/>
                    </section>

                    <div className="flex3">
                        <section className="form-field">
                            <label htmlFor="weight">Update Weight : {itemData && itemData.weight} <Link onClick={()=> setWeight(itemData.weight)} to={''} className = 'setvalue'>Set value</Link></label>
                            <input defaultValue={weight} onChange={(e) => setWeight(e.target.value)} type="number" name="weight" id="weight" placeholder="Enter weight"/>
                        </section>

                        <section className="form-field">
                            <label htmlFor="width">Update Width : {itemData && itemData.width} <Link onClick={()=> setWidth(itemData.width)} to={''} className = 'setvalue'>Set value</Link></label>
                            <input defaultValue={width} onChange={(e) => setWidth(e.target.value)} type="number" name="width" id="width" placeholder="Enter width"/>
                        </section> 

                        <section className="form-field">
                            <label htmlFor="height">Update Height  : {itemData && itemData.height} <Link onClick={()=> setHeight(itemData.height)} to={''} className = 'setvalue'>Set value</Link></label>
                            <input defaultValue={height} onChange={(e) => setHeight(e.target.value)} type="number" name="height" id="height" placeholder="Enter height"/>
                        </section>
                    </div>
                    
                    <section className="form-field">
                        <label htmlFor="depth">Update Depth : {itemData && itemData.depth} <Link onClick={()=> setDepth(itemData.depth)} to={''} className = 'setvalue'>Set value</Link></label>
                        <input defaultValue={depth} onChange={(e) => setDepth(e.target.value)} type="number" name="depth" id="depth" placeholder="Enter Depth"/>
                    </section>

                    <div className="flex4">
                        <section className="form-field">
                            <label className="center" htmlFor="oversizeitem">Update Oversize item?  : {itemData && itemData.oversizeItem} <Link onClick={()=> setOversizeItem(itemData.oversizeItem)} to={''} className = 'setvalue'>Set value</Link></label>
                            <input defaultValue={oversizeItem} onChange={(e) => e.target.value === 'on' ? setOversizeItem(true) : setOversizeItem(false)} type="checkbox" name="oversizeitem" id="oversizeitem" placeholder="Enter oversize item"/>
                        </section>

                        <section className="form-field">
                            <label className="center" htmlFor="truckdelivery">Update Truck Delivery? : {itemData && itemData.truckDelivery} <Link onClick={()=> setTruckDelivery(itemData.truckDelivery)} to={''} className = 'setvalue'>Set value</Link></label>
                            <input defaultValue={TruckDelivery} onChange={(e) => e.target.value === 'on' ? setTruckDelivery(true) : setTruckDelivery(false)} type="checkbox" name="truckdelivery" id="truckdelivery" placeholder="Enter truck Delivery"/>
                        </section>

                        <section className="form-field">
                            <label className="center" htmlFor="inventory">Update Inventory? : {itemData && itemData.inventory} <Link onClick={()=> setInventory(itemData.inventory)} to={''} className = 'setvalue'>Set value</Link></label>
                            <input defaultValue={inventory} onChange={(e) => e.target.value === 'on' ? setInventory(true) : setInventory(false)} type="checkbox" name="inventory" id="inventory" placeholder="Enter inventory"/>
                        </section>

                        <section className="form-field">
                            <label className="center" htmlFor="deleted">Update Deleted? : {itemData && itemData.isDeleted} <Link onClick={()=> setIsDeleted(itemData.isDeleted)} to={''} className = 'setvalue'>Set value</Link></label>
                            <input defaultValue={IsDeleted} onChange={(e) => e.target.value === 'on' ? setIsDeleted(true) : setIsDeleted(false)} type="checkbox" name="deleted" id="deleted"/>
                        </section>
                    </div>


                    {/* Update button */}
                    <section className="form-button-container">
                        {!loading && <Link className="form-button" to = {''} onClick = {() => handleUpdateItem()}>update</Link>}
                        {loading && <Link className="form-button" to = {''}>updating...</Link>}
                    </section>
                </div>
            </form>

        </div>
    );
}
 
export default UpdateItem;