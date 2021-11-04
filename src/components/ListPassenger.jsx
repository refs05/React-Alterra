import ListItem from "./ListItem";


const ListPassenger = ({data, hapusPengunjung}) => {
    return (
        <div>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                <thead>
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                </thead>
                <tbody>
                    {data.map((passenger) => <ListItem key={passenger.id} item={passenger} hapusPengunjung={hapusPengunjung}/>)}
                </tbody>
            </table>
        </div>
    )
}

export default ListPassenger;