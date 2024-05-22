import { useDispatch, useSelector } from "react-redux"

function HomeworkD(){
    const dispatch = useDispatch()
    const word = useSelector(state => state)
    
    const nandPlus =() =>{
        dispatch({
            type: 'PLUS'
        })
    }
    const nandMinus =() =>{
        dispatch({
            type: 'MINUS'
        })
    }

    return( 
        <>
        <div>{word}</div>
        <button onClick={nandPlus}>+</button>
        <button onClick={nandMinus}>-</button>
        </>
        )
}

export default HomeworkD