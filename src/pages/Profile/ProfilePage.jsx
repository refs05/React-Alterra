import Header from "./component/Header";
import ProfileCard from "./component/ProfileCard";

export default function ProfilePage({users}) {
    return (
    <>
        <Header text="Profile Page"/>
        {users.map((user) => <ProfileCard user={user}/>)}
    </>
    )
}