import React from "react";
import { graphql, useStaticQuery } from 'gatsby'
import { Link }from 'gatsby'
import MobileMenu from "./mobileMenu"
import LinkLogo from './linkLogo'

import back from '../icons/back.svg';
import logo from '../icons/logo.svg';

const Header = ({ facebook, linkedin, instagram }) => {
  {/** track last page, to trigger appearance of the back button **/}

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
    <header>
      {/* Desktop Menu  */}
        <div className="hidden lg:flex xl:flex px-3 inset-x-0 top-0 items-center fixed z-50 bg-white">
            <div className="w-1/5">
              <Link to = {`/`} >
                <img className="mb-0" src={logo} height="63px" width="63px" />
              </Link>
            </div>
            <div className="flex w-4/5 flex-auto justify-end">
              {menuList.map(({node: menu, index}) => (
                <Link to={`/${menu.slug}`}>
                  <span className="px-2">{menu.pageName}</span>
                </Link>
              ))}
            </div>
          </div>
      {/* Mobile Menu */}
      <div className="xl:hidden lg:hidden flex items-center justify-between flex-wrap px-3 inset-x-0 top-0 fixed z-50 bg-white">
        <div className="hidden"><img className="mb-0" src={back} /></div>
        <Link to={`/`}>
          <div className="flex justify-center items-center">
          <img className="mb-0" src={logo} />
          </div>
        </Link>
        <MobileMenu facebook={facebook} instagram={instagram} menuList={menuList} />
      </div>
    </header>
  )
}

export default Header

