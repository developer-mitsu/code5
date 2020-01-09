import React from 'react'
import Item from './Item'
import styled from 'styled-components'

const List = ({todos}) => {



    return (  
        <ItemWrap>
            {
                todos.map((todo,i) => {
                    return(
                        <Item 
                        content={todo}
                        id={i+1}
                        key={i}
                        />
                    )

                })
            }
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