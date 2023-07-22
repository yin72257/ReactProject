import Card from "./UI/Card";
import styles from "./UserList.module.css"
const UserList = (props) => {
    if (props.list.length === 0) {
        return;
    }
    
    return <Card className={styles.users}>
        <ul>
            {props.list.map((user) => {
                return <li>{user.username} ({user.age} years old)</li>
            })}
        </ul>
    </Card>
}

export default UserList;