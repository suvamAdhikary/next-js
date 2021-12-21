import Link from "next/link";



const user = ({ user }) => {

    return (
        <>
            <h1>{user?.first_name} {user?.last_name}</h1>
            <p>Email: {user.email}</p>
            <br />
            <Link href="/">Back</Link>
        </>
    )
}


export const getStaticProps = async (context) => {
    const res = await fetch(`https://reqres.in/api/users/${context.params.id}`)

    const { data } = await res.json();

    return {
        props: {
            user: data,
        },
    }

}

export const getStaticPaths = async () => {
    const res = await fetch('https://reqres.in/api/users')

    let users = await res.json()

    users = users.data;

    const ids = users.map((user) => user.id)
    const paths = ids.map((id) => ({ params: {id: id.toString()} }))

    return {
        paths,
        fallback: false,
    }
}


export default user;