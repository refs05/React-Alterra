import "./Home.css"
import PassengerEdit from "./PassengerEdit";

const ListItem = (props) => {
    const { id, nama, umur, gender } = props.data;
    const hapusPengunjung = props.hapusPengunjung;
    const editPengunjung = props.editPengunjung;

    return (
        <>
        <tr>
            <td>{nama}</td>
            <td>{umur}</td>
            <td>{gender}</td>
            <td className="removeBorder" onClick={() => hapusPengunjung(id)}><button>Hapus</button></td>
            <PassengerEdit id={id} data={props.data} editPengunjung={editPengunjung} />
        </tr>
        </>
    )
}

export default ListItem;