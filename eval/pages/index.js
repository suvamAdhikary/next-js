import Head from 'next/head'
import Image from 'next/image'
import UserList from '../Components/UserList'
import styles from '../styles/Home.module.css'


export default function Home({ users }) {
  return (
    <div className={styles.container}>
      <UserList users={users}/>
    </div>
  )
}



export const getStaticProps = async () => {
  const res = await fetch(`https://reqres.in/api/users?page=2`);
  const users = await res.json();
  console.log("frm index", users);
  return {
    props: {
      users: users.data,
    },
  }
}