import "./todoCard.css"
import bin from "./bin.png"

function todoCard({index,task,categeory,deleteItem}) {
    const Category_Emoji = {
        Sports: "🏁",
        Learning: "📚",
        Work: "💻",
        Health: "🏥",
        Personal: "🔐",
        Shopping: "🛍️",
        Other: "📁"
    }
    const Category_Color = {
        Sports: "#bfff80",
        Learning: "#bfff80",
        Work: "#bfff80",
        Personal: "#bfff80",
        Shopping: "#bfff80",
        Health: "#bfff80",
        Other: "#bfff80"
    }

  return (
    <div className="todo-Card">
        {task}
        <span className="category categoryy" style={{backgroundColor: Category_Color[categeory]}}>
            {Category_Emoji[categeory]} {categeory}
        </span>
            <img src={bin} className="delete-icon categoryy" alt="deleteIcon" onClick={()=>{
                deleteItem(index)
            }}/>
        
    </div>
  )
}

export default todoCard