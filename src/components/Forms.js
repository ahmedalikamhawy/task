import { useState } from "react";
const Form = (props) => {
  const [itemTitle, setItemTitle] = useState({Title:'', Priority:'High'});

  const itemTitleChangeHandler = (event) => {
    setItemTitle((prevState) => {
      return ({...prevState, Title: event.target.value });
    });
  };
  const itemPriorityChangeHandler = (event) => {
    setItemTitle((prevState) => {
        return ({...prevState, Priority: event.target.value });
      });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(itemTitle);
    props.onSaveData(itemTitle);
    setItemTitle((prevState) => {
        return ({...prevState,Title:'', Priority: 'High' });
        });

  };
  return (
    <div>
      <form className="main-frm" onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            name="new-todo"
            value={itemTitle.Title}
            onChange={itemTitleChangeHandler}
          />
        </div>
        <div>
          <label for="priority">Choose priority:</label>
          <select id="priority" name="priorities" value={itemTitle.Priority} onChange={itemPriorityChangeHandler}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};
export default Form;
