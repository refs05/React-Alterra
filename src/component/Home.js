import { useEffect, useState } from "react";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import useGetPassenger from "../hook/useGetPassenger";
import useSubsPassenger from "../hook/useSubsPassenger";
import useDeletePassenger from "../hook/useDeletePassenger";
import useInsertPassenger from "../hook/useInsertPassenger";
import useEditPassenger from "../hook/useEditPassenger";

function Home() {
  const [dataPassenger, setDataPassenger] = useState([]);
  const [id, setId] = useState({id: null});

  const { getPassengerId, errorPassengerId, loadingPassengerId, dataPassengerId, subscribePassengerId } = useGetPassenger();
  const { dataSubsPassenger, loadingSubsPassenger, errorSubsPassenger } = useSubsPassenger();
  const { deletePassenger, loadingDelete } = useDeletePassenger();
  const { insertPassenger, loadingInsert } = useInsertPassenger();
  const { editPassenger, loadingEdit } = useEditPassenger();

  useEffect(() => {
    if (dataPassengerId) {
        subscribePassengerId();
        setDataPassenger(dataPassengerId?.kampus_merdeka_anggota);
    }
   
    if (errorPassengerId || errorSubsPassenger) {
        console.log("error Subs",errorSubsPassenger);
        console.log("error fetch", errorPassengerId);
        return null
    }
}, [dataPassengerId, errorPassengerId, errorSubsPassenger])

const hapusPengunjung = (id) => {
    deletePassenger({variables: {
        id: id
    }})
}

const tambahPengunjung = (newUser) => {
    insertPassenger({variables: {
        nama: newUser.nama,
        umur: newUser.umur,
        gender: newUser.gender
    }})
}

const editPengunjung = (editUser) => {
    editPassenger({variables: {
        id: editUser.id,
        nama: editUser.nama,
        umur: editUser.umur,
        gender: editUser.gender
    }})
}

const onGetData = () => {
    getPassengerId({variables: {
        id: id
    }})
    setDataPassenger(dataPassengerId?.kampus_merdeka_anggota)
}

const onChangeStasiunID = (e) => {
    if (e.target) {
        setId(e.target.value)
    }
}

return (
    <div>
        <Header />
        <input type="number" className="input-text" placeholder="ID..." value={id} onChange={onChangeStasiunID} />
        <button onClick={onGetData}>Get Data</button>
        {dataPassengerId? <ListPassenger data={dataPassenger} hapusPengunjung={hapusPengunjung} editPengunjung={editPengunjung}/> : null}
        {dataPassengerId? <PassengerInput tambahPengunjung={tambahPengunjung}/> : null}
    </div>
)
}

export default Home;