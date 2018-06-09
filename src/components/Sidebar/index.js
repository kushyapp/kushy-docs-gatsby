import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";

import uppercase from '../../helpers/uppercase'
import slugify from '../../helpers/slugify'

export default (props) => {
    /**
     * Make an array of the sidebar links sorted by their category
     * Allows us to loop through by category first to generate headers,
     * then loop through the category's links.
     * 
     * [
     *  'shops' => [
     *      node,
     *      node,
     *   ],
     *  'strains' => [
     *      node,
     *      node,
     *   ],
     * ]
     */
    let sortedSidebarLinks = [];
    let sidebarLinks = props.data.filter((sidebarLink) => {
        if (sidebarLink.node.fields.category in sortedSidebarLinks)
        {
            return sortedSidebarLinks[sidebarLink.node.fields.category].push(sidebarLink);
        }
        return sortedSidebarLinks[sidebarLink.node.fields.category] = [
            sidebarLink
        ];
    });
    
    /**
     * We define a blank array and push all our JSX elements into it
     * since React accepts any array of elements
     * 
     * We use a "for in" loop to access the array/obj key
     * create the header, push it to the array,
     * then map through the section's links and push that too
     * 
     * <h2>Header</h2>
     * <Link>Link here</Link>
     * <Link>Link here</Link>
     */
    let sidebarMenu = [];
    for(let section in sortedSidebarLinks)
    {
        let sidebarMenuItems = sortedSidebarLinks[section].map((link) => {
            let menuItemMethod;

            if(link.node.frontmatter.method)
            { 
                menuItemMethod = <span className={'ui label ' + link.node.frontmatter.method }>{ link.node.frontmatter.method.toUpperCase() }</span>
            }

            let menuItemTitle = `${link.node.frontmatter.route}`;
            return <Link to={ link.node.fields.slug } className="ui item">{ menuItemMethod ? menuItemMethod : '' }{ menuItemTitle }</Link>
        });

        let sidebarGroup = (<div className="item">
                        <h3 className="header item">{ uppercase(section) }</h3>
                        <div className="menu">
                            { sidebarMenuItems }
                        </div>
                    </div>);
        sidebarMenu.push(sidebarGroup);
    }
    sidebarMenu.reverse()

    return (
        <nav className="Sidebar ui vertical menu" id="sidebar">
            {
                sidebarMenu
            }
        </nav>
    );
};