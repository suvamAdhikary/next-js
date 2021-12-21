import Link from "next/link";


const UserItem = ({ user }) => {

    return (
        <div>
            <p>{user?.first_name} {user?.last_name}</p>
            <Link href={`user/${user?.id}`} passHref>
                <a>
                <button>Details</button>
                </a>
            </Link>
        </div>
    )
}

export default UserItem;