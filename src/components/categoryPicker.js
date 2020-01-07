import React , { useContext, useCallback } from "react"
import { store } from '../utils/store.js';
import ProductList from "../components/productList"

const CategoryPicker = (props) => {
    const globalState = useContext(store);
    const { dispatch } = globalState;

    const handleClick = useCallback((e, item)=>{
        dispatch({type: item})
    })

    const catList = props.category.map((item, key) =>
        <a key = {item}
            className="pr-8 active:font-semibold cursor-pointer"
            style={{
                'fontWeight': globalState.state === item ? 'bold':'normal',
                'opacity': globalState.state === item ? '1':'0.5'
            }} 
            onClick={(e) => handleClick(e, item)}
        >
            {item}
        </a>
    )
    
    return (
        <div className="mx-4 content-center max-w-full">
            <div className="overflow-x-visible max-w-full">
                <h1 className="lg:text-6xl sm:-mb-4">{globalState.state}</h1>
                <div className="mb-2 lg:mb-8 md:mb-8 overflow-x-visible lg:mt-4">
                    {catList}
                </div>
                <div className="flex -mx-2 pb-4 overflow-x-auto scrolling-touch">
                    <ProductList category={globalState.state}/>
                </div>
            </div>
        </div>
    )


}

export default CategoryPicker;