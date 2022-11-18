import React, { useEffect, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { itemsInterface } from "../Interfaces/interface";
import axios from "axios";
import Navbar from "./navbar";
import { MdLaptopWindows, MdList, MdPhone } from "react-icons/md";
import { stringify } from "querystring";
import { log } from "console";

const Category = () => {
  const { cateparams } = useParams<string>();
  const [products, setProducts] = useState<itemsInterface[]>([]);

  const navigate = useNavigate();

  const [found, setFound] = useSearchParams();
  const itemFound = found.get("searchedProduct");
  const [isActive, setIsActive] = useState<boolean>(false);

  // const {id} = useParams();

  const [searchitem, setSearchitem] = useState<itemsInterface[]>([]);
  const [filtered, setFiltered] = useState<itemsInterface[]>([]);

  const [categorySelector, setCategorySelector] = useState<string>("");
  const [minValue, setMinValue] = useState<any>(Number());
  const [maxValue, setMaxValue] = useState<any>(Number());

  //pagination
  const [pageNumber, setPageNumber] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // const handleSearch = (id:string)=>{
  //     let searched:itemsInterface[] = products.filter((perSearched:itemsInterface)=>perSearched.title.toLowerCase().includes(id.toLowerCase()))
  //     setSearchitem(searched)

  //     console.log(searched + ' akmfaf');

  // }

  useEffect(() => {
    axios.get("http://localhost:3001/products").then((response) => {
      if (response) {
        setProducts(response.data);
        handlefilter(cateparams!, response.data);
        // setFiltered(response.data);
        // setCategorySelector(id)
      }
    });

    // handleSearch(id!)
    // console.log(products);
  }, []);

  const handlefilter = async (
    categorySelector: string,
    initial_data: itemsInterface[]
  ) => {
    // console.log('aaaaaaaaa ' +setFiltered([]));

    if (categorySelector != "") {
      var searched: itemsInterface[] = initial_data.filter(
        (perSearched: itemsInterface) =>
          perSearched.itemCate == categorySelector
      );
      // setCategorySelector(categorySelector);
      setFiltered(searched);
      // setBacked_data(searched);

      navigate(`/categories/${categorySelector}/`);

      var temp: itemsInterface[] = [];
      temp = searched;
      console.log(temp);

      // var temp:itemsInterface[] = (JSON.parse(JSON.stringify(searched)));
      if (isActive == true) {
        console.log(searched);

        var catefilter: itemsInterface[] = searched.filter(
          (perfilter: itemsInterface) =>
            perfilter.price >= minValue && perfilter.price <= maxValue
        );
        setFiltered(JSON.parse(JSON.stringify(catefilter)));
        console.log(catefilter);
      } else {
        setFiltered(searched);
      }
    }

    if (window.location.pathname === "/categories/Filter%20Category%20By") {
      navigate("/categories");
      setFiltered(initial_data);
    }

    // will create an if statement here that is if the user clicks on a category
    // and wants to filter the price for that cate
  };

  const handlefilter_btn = () => {
    navigate({
      pathname: `/categories/${categorySelector}/`,
      search: createSearchParams({
        minValue: minValue,
        maxValue: maxValue,
      }).toString(),
    });
  };

  // const handlePriceFilter = (minValue:number, maxValue:number) =>{
  //     // let searched:itemsInterface[] = products.filter((perSearched:itemsInterface)=>perSearched.price == minValue)

  //     if(minValue > 0 && maxValue > 0){
  //         console.log(minValue + " min");
  //         console.log(maxValue + " max");

  //         let searched:itemsInterface[] = products.filter((perSearched:itemsInterface)=>perSearched.price >= minValue && perSearched.price <= maxValue)
  //         setFiltered(searched)
  //         console.log('hii');

  //     }

  // }

  const options = [
    <div className="flex w-full  ">
      <input
        onChange={(e: any) => {
          setMinValue(e.target.value);
        }}
        className="w-28 py-2 pl-3 mr-1 mt-2"
        type="any"
        placeholder="Min"
      />
      <input
        onChange={(e: any) => {
          setMaxValue(e.target.value);
        }}
        className="w-28 py-2 pl-3 ml-1 mt-2"
        type="number"
        placeholder="Max"
      />
    </div>,
    <li>Lower than 100</li>,
    <li>Higher than 100</li>,
    <button
      onClick={() => {
        handlefilter(categorySelector, products);
        handlefilter_btn();
        console.log(minValue + " " + maxValue + " ajsbd");
      }}
      className="p-2 rounded-full text-2xl text-white flex justify-center w-full bg-green-600"
    >
      Filter
    </button>,
  ];

  return (
    <div className="w-full h-full">
      <div className="w-full h-full  flex ">
        {/* <Navbar products={[]} /> */}
        <div className=" flex justify-center items-center w-full h-screen rounded-xl mt-24">
          <div className="w-full h-screen  ">
            <div className="w-full h-screen  justify-center items-center">
              <div className="flex w-full p-14  justify-between ">
                <div className="">
                  <select
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      handlefilter(e.target.value, products);
                      setCategorySelector(e.target.value);
                    }}
                    className="justify-left bg-slate-400 py-4 px-16 text-lg rounded-2xl"
                  >
                    <option
                      className="text-2xl px-4"
                      value="Filter Category By"
                    >
                      Filter Category By
                    </option>
                    <option value="Home and Garden">Home and Garden</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Phones">
                      <MdPhone color="white" />
                      Phones
                    </option>
                    <option value="Electronics">Electronics</option>
                    <option value="Books">Books</option>
                    <option value="Baby Toys">Baby Toys</option>
                    <option value="Pets">pets</option>
                  </select>
                </div>

                <div className="w-70 mr-10  ">
                  <div className="p-5 font-bold text-gray-500 flex items-center justify-between">
                    <li
                      className="list-none"
                      onClick={() => setIsActive(!isActive)}
                    >
                      <MdList size={30} color={"#000"} />{" "}
                    </li>
                  </div>
                  {isActive && (
                    <div className="shadow-2xl fixed right-28 bg-red-300 w-70 p-15 text-slate-500 cursor-pointer">
                      {options.map((option) => (
                        <div className=" w-full p-5 cursor-pointer text-left ">
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full justify-evenly flex flex-row h-5/6 flex-wrap">
                {filtered.map((item) => {
                  return (
                    <div
                      onClick={() => {
                        navigate(`/cart/${item.id}`);
                      }}
                      className="shadow-2xl  w-3/4 md:w-5/12 flex-wrap lg:w-80 sm:w-5/12 xl:w-80  justify-evenly pt-2 px-2 m-6 h-4/5 md:h-5/12 list-none text-left rounded-lg"
                    >
                      {/* Image div */}
                      <div className="w-full h-4/6 bg-fuchsia-100">
                        <img className="w-full h-full" src={item.url} />
                      </div>
                      {/* details */}
                      <ul className="w-full ">
                        <li className=" pl-4 pt-2 font-bold flex">
                          {" "}
                          ItemName{" "}
                          <h1 className=" pr-2  font-normal">
                            {" "}
                            :{item.title}{" "}
                          </h1>
                        </li>
                        <li className=" pl-4 font-bold flex">
                          ItemPrice GHC
                          <h1 className=" pr-2 font-normal">
                            {" "}
                            :{item.price}
                          </h1>{" "}
                        </li>
                        <li className=" pl-4 font-bold flex">
                          ItemCategory{" "}
                          <h1 className=" pr-2 font-normal">
                            {" "}
                            :{item.itemCate}
                          </h1>{" "}
                        </li>
                        <li className=" pl-4 font-bold flex">
                          Description{" "}
                          <h1 className=" pr-2 font-normal text-base">
                            {" "}
                            : {item.description}
                          </h1>{" "}
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
