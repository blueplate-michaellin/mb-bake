import React , { Component } from "react"
import { graphql, StaticQuery } from 'gatsby'

import ProductList from "../components/productList"

class CategoryPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          categoryChosen: this.props.category[0],
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (e, item) => {
        e.preventDefault()
        this.setState({
            categoryChosen: item
        })
    }

    render () {

        const catList = this.props.category.map((item, key) =>
            <a 
                className="pr-8 active:font-semibold cursor-pointer"
                style={{
                    'fontWeight': this.state.categoryChosen === item ? 'bold':'normal',
                    'opacity': this.state.categoryChosen === item ? '1':'0.5'
                }} 
                onClick={(e) => this.handleClick(e, item)}
            >
                {item}
            </a>
        )

        return (
            <div className="mx-4 content-center max-w-full">
                <div className="overflow-x-visible max-w-full">
                    <h1 className="lg:text-6xl sm:-mb-4">{this.state.categoryChosen}</h1>
                    <div className="mb-2 lg:mb-8 md:mb-8 overflow-x-visible lg:mt-4">
                        {catList}
                    </div>
                    <div className="flex -mx-2 pb-4 overflow-x-auto scrolling-touch">
                        <ProductList category={this.state.categoryChosen}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default () => (
    <StaticQuery
        query={graphql`
            query {
                allContentfulProduct {
                    distinct(field: category)
                }
            }       
        `}
        render={(data) => (
            <CategoryPicker category={data.allContentfulProduct.distinct} />
        )}
    />
)