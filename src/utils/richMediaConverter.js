import React from 'react'
import PropTypes from 'prop-types';
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const RichMediaConverter = ({data}) => {

    const Bold = ({ children }) => <span className="bold">{children}</span>
    const Text = ({ children }) => <span className="align-center">{children}</span>
    const List = ({children}) => <li>{children}</li>
    const ListWrap = ({children}) => <ul className = "list-disc pl-6">{children}</ul>

    const options = {
    renderMark: {
        [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
        [BLOCKS.LIST_ITEM]: (node, children) => <List>{children}</List>,
        [BLOCKS.UL_LIST]: (node, children) => <ListWrap>{children}</ListWrap>
    },
    }

    const output = documentToReactComponents(data, options)

    return (
        <>
            {output}
        </>
    )
}

RichMediaConverter.propTypes = {
    data: PropTypes.object.isRequired,
  }

export default RichMediaConverter;