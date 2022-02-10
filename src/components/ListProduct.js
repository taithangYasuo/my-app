import { useEffect, useRef, useState, useLayoutEffect, useMemo } from "react"
import { useParams } from "react-router-dom"

import {products} from "../data"
import ItemProduct from "./ItemProduct"

function ListProduct({name}) {
    const {collectionKey} = useParams()

    const [list, setList] = useState([])
    const [sort, setSort] = useState("0")

    //lay data theo params
    useEffect(() => {
        if(collectionKey) {
            if(products[collectionKey]) {
                setList(products[collectionKey])
            } else {
                setList([])
            }
        } else {
            let arr = [];
            for(let key in products) {
                arr = [
                    ...arr,
                    ...products[key],
                ]
            }
            setList(arr)
        }
        console.log(list)
    }, [collectionKey])

    //sort data
    const sorted = useMemo(() => {
        let newList
        switch (sort) {
            case "0":
                console.log("gia tang dan")
                newList = list.sort((a, b) => {
                    if(a.price > b.price) return 1
                    if(a.price < b.price) return -1
                    return 0
                })              
                return newList
            case "1":
                console.log("gia giam dan")
                newList = list.sort((a, b) => {
                    if(a.price > b.price) return -1
                    if(a.price < b.price) return 1
                    return 0
                })              
                return newList
            case "2":
                console.log("Ten A-Z")
                newList = list.sort((a, b) => {
                    if(a.name > b.name) return 1
                    if(a.name < b.name) return -1
                    return 0
                })              
                return newList
            case "3":
                console.log("Tên Z-A")
                newList = list.sort((a, b) => {
                    if(a.name > b.name) return -1
                    if(a.name < b.name) return 1
                    return 0
                })              
                return newList
            default:
                break;
        }
    }, [sort, list])

    console.log(sort)
    console.log(list)

    return (
        <div className="list-product">
            <div className="list-product-header flex">
                <h1>Tất cả sản phẩm</h1>
                <select 
                    name="" 
                    id="" 
                    value={sort}
                    onChange={e => setSort(e.target.value)}
                >
                    <option value={0}>Giá: Tăng dần</option>
                    <option value={1}>Giá: Giảm dần</option>
                    <option value={2}>Tên: A-Z</option>
                    <option value={3}>Tên: Z-A</option>
                </select>
            </div>
            {
                sorted.length != 0 
                ? (
                    <div className="list-product-content flex">
                        {
                            sorted.map((product, index) => (
                                <ItemProduct
                                    key={index}
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                    link={product.link}
                                />
                            ))
                        }
                    </div>
                  ) 
                : (<div>Không tìm thấy sản phẩm nào phù hợp!</div>)
            }
        </div>  
    )
}

export default ListProduct