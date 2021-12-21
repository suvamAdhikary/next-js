import UserItem from "./UserItem";


const UserList = ({ users }) => {
    console.log(users);
    return (
        <div>
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    )
}

export default UserList;