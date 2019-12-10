import React from "react";
import { graphql, StaticQuery } from 'gatsby'
import { Link }from 'gatsby'
import MobileMenu from "./mobileMenu"
import LinkLogo from './linkLogo'

import back from '../icons/back.svg';
import logo from '../icons/logo.svg';

const Header = ({ facebook, linkedin, instagram, menuList }) => {
  {/** track last page, to trigger appearance of the back button **/}

  return (
    <header>
      {/* Desktop Menu  */}
        <div className="hidden lg:flex xl:flex px-3 inset-x-0 top-0 items-center fixed">
            <div className="w-1/5">
             <img className="mb-0" src={logo} height="63px" width="63px" />
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
      <div className="xl:hidden lg:hidden flex items-center justify-between flex-wrap px-3 inset-x-0 top-0 fixed z-50">
        <img className="mb-0" src={back} />
        <img className="mb-0" src={logo} />
        <MobileMenu facebook={facebook} linkedin={linkedin} instagram={instagram} />
      </div>
    </header>
  )
}

export default () => (
  <StaticQuery
      query={graphql`
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
      `}
      render={(data) => (
          <Header menuList={data.allContentfulCompanyInfo.edges} />
      )}
  />
)

