import React from 'react'

const Item = () => {

    //React.useStateを実行すると
    //最新の状態の値
    const [isDone, setIsDone] = React.useState(false)

    const doneLine = isDone ?
                            {textDecorationLine: 'line-through'}:
                            null


    return (
        <li>
            <input type="checkbox" onChange={() =>{
                setIsDone(!isDone)
            }} />
            <span style={doneLine}>サンプル</span>
            <button>編集</button>
            <button>削除</button>
        </li>
    )
}

export default Item