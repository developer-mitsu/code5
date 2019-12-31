import React from 'react'
import Item from './Item'
import styled from 'styled-components'

const List = () => {
    return (  
        <ItemWrap>
            <Item className='first' />
            <Item />
            <Item />
            <Item />
        </ItemWrap>
    )
}

const ItemWrap = styled.ul`
    list-style: none;
    width:80%;
    padding: 0px;
    margin: 0 auto;
`


export default List