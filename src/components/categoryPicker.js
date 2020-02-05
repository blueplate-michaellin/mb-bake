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
            className="pr-8 lg:px-4 xl:px-4 active:font-semibold cursor-pointer"
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
                <h2 className="text-6xl lg:text-center xl:text-center sm:-mb-4">{globalState.state}</h2>
                <div className="mb-2 lg:mb-8 md:mb-8 overflow-x-visible lg:mt-4 lg:mx-auto xl:mx-auto" style={{width: '290px'}}>
                    {catList}
                </div>
                <div className="flex -mx-2 pb-4 overflow-x-auto scrolling-touch lg:flex-wrap xl:flex-wrap lg:justify-center xl:justify-center">
                    <ProductList category={globalState.state}/>
                </div>
            </div>
        </div>
    )


}

export default CategoryPicker;