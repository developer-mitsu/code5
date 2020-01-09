import React from 'react'
import styled from 'styled-components'

const Item = ({content, id}) => {

    //React.useStateを実行すると
    //最新の状態の値
    const [isDone, setIsDone] = React.useState(false)

    const doneLine = isDone ?
                            {textDecorationLine: 'line-through'}:
                            null


    return (
        <Listwrap>
            <LeftContents>
            <Check type="checkbox" onChange={() =>{
                setIsDone(!isDone)
            }} />
            <span style={doneLine}>{`${id}: ${content}`}</span>
            </LeftContents>
            <RightContents>
            <EditButton>edit</EditButton>
            <DeleteButton>delete</DeleteButton>
            </RightContents>
        </Listwrap>
    )
}

const Listwrap = styled.li`
    display: flex;
    justify-content:space-between;
    color: red;
    &:not(:last-child) {
        margin-bottom: 15px;
    }
`
const LeftContents = styled.a`
    display: inline-block
`

const RightContents = styled.a`
    display: inline-block
`

const Check = styled.input`
    
`

const EditButton = styled.button`
    color: white;
    background-color: #66FF00; 
    margin-right:5px;
    border-radius:10px;
`

const DeleteButton = styled.button`
    color: white;
    background-color: red;
    border-radius:10px;
`



export default Item