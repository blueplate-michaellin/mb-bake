import React from "react";
import { graphql, useStaticQuery } from 'gatsby'
import { Link }from 'gatsby'
import LinkFacebook from "./linkFacebook"
import LinkLinkedIn from "./linkLinkedIn"
import LinkIG from "./linkIG"

import logo from '../icons/logo.svg';

const Footer = ({ facebook, linkedin, instagram }) => {

    const data = useStaticQuery(graphql`
        query {
        allContentfulCompanyInfo {
            edges {
                node {
                pageName
                slug
                }
            }
        }
        }  
    `)

    const menuList = data.allContentfulCompanyInfo.edges

  return (
    <footer>
        <div className="hidden md:block lg:block xl:block px-3 inset-x-0 z-50 bg-mb-green">
            <div className="container mx-auto top flex flex-col justify-center py-12">
                <div>
                    <Link to = {`/`}>
                        <img className="mb-0 mx-auto" src={logo} height="63px" width="63px" />
                    </Link>
                    <h5 className="text-center mb-6">MB Bake</h5>
                </div>
                <div className="flex justify-center items-center w-full mb-6">
                    {menuList.map(({node: menu, index}) => (
                        <Link to={`/${menu.slug}`}>
                        <span className="mr-2">{menu.pageName}</span>
                        </Link>
                    ))}
                </div>
                <div>
                <div className = "flex justify-center items-center w-full mb-6">
                    <LinkFacebook link={facebook} size={"25"}/>
                    <LinkIG link={instagram} size={"25"}/>
                    <LinkLinkedIn link={linkedin} size={"25"}/>
                </div>
                <p className="text-xs text-center">&copy; 2020 All rights reserved</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer

