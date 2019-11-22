import React , { Component } from "react"
import { graphql, StaticQuery } from 'gatsby'

import ProductList from "../components/productList"

class CategoryPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          categoryChosen: "Bread",
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
            <div className="z-0 container">
                <h1>{this.state.categoryChosen}</h1>
                <div className="mb-6">
                    {catList}
                </div>
                <ProductList category={this.state.categoryChosen}/>
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