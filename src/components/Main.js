import Article from "./Article";
import './Main.css';
function Main(){
    return(
        <main>
            <div>
                <form className="main-frm">
                    <div>
                        <input type="text" name="new-todo"/>
                    </div>
                    <div>
                        <button>priority: HIGH</button>
                    </div>
                    <div>
                        <button>Add</button>
                    </div>
                </form>
            </div>
            <div className='main-h3'><h3>To-do List</h3></div>
            <div className="main-rtcl">
                <Article></Article>
                <Article></Article>
                <Article></Article>
                <Article></Article>
            </div>
        </main>
    );
}
export default Main;