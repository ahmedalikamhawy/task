function Article(props){
    const deleteItems2 = ()=>{
        props.onDeleteItem(props.title); 
    }
    return(
        <article>
            <h2>{props.title}</h2>
            <p>{props.priority}</p>
            <div>
                <button onClick = {deleteItems2}>Delete Item</button>
            </div>
        </article>
    );
}
export default Article;
