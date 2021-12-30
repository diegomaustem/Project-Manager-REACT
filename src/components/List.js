import Item from './Item'

function List(){

    return (
        <>
        
        <h1>Minha Lista</h1>
        <ul>
            <Item marca="Toyota" lancamento={1999}/>
            <Item marca="Chevrolett"  lancamento={2000}/>
            <Item marca="Fiat" lancamento={2003}/>
        </ul>
        </>
    )

}

export default List