import React, { Component } from 'react'
import LinkFacebook from "./linkFacebook"
import LinkLinkedIn from "./linkLinkedIn"
import LinkIG from "./linkIG"
import menu from '../icons/menu.svg'
import logo from '../icons/logo.svg'
import close from '../icons/close.svg'

class MobileMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
        }
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleOpen = (e) => {
        e.preventDefault()
        this.setState({
            menuOpen: true
        })
    }

    handleClose = (e) => {
        this.setState({
            menuOpen: false
        })
    }

    render() {
        return(
            <>
                <div className="inline-block">
                    <button className="flex items-center rounded text-black hover:text-black" onClick={this.handleOpen}>
                        <img className="mb-0" src={menu} />
                    </button>
                </div>
                {
                    this.state.menuOpen ?
                    <div className="w-screen h-screen fixed z-50 top-0 left-0 bg-white overflow-hidden">
                        <div className ="absolute top-0 right-0 mx-2">
                            <button className="flex item-center rounded" onClick={this.handleClose}>
                                {/* TODO: Refactor this to a proper button */}
                                <img className="mb-0" src={close} />
                            </button>
                        </div>
                        <div className="container m-auto">
                            <div className = "flex justify-center items-center">
                                    <img src={logo} />
                            </div>
                            <div className="container m-auto py-8">
                                    {/* TODO: Refactor this list and add Link tag */}
                                    <a className="flex justify-center -px-4"><h1>About us</h1></a>
                                    <a className="flex justify-center -px-4"><h1>Contact</h1></a>
                                    <a className="flex justify-center -px-4"><h1>FAQ</h1></a>
                            </div>
                            <div className = "container">
                                <p className="text-center">follow us on:</p>
                                <div className = "mx-auto flex justify-between items-center w-24 mt-6 pr-4">
                                    <LinkFacebook link={this.props.facebook} size={"20"}/>
                                    <LinkIG link={this.props.instagram} size={"20"}/>
                                    <LinkLinkedIn link={this.props.linkedin} size={"20"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    null
                }
            </>
        )
    }
}

export default MobileMenu