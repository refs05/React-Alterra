import { useEffect, useState } from "react";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { gql } from '@apollo/client'

export const InsertPassenger = gql`
mutation MyMutation2($gender: String!, $nama: String!, $umur: Int!) {
    insert_kampus_merdeka_anggota(objects: {gender: $gender, nama: $nama, umur: $umur}) {
      affected_rows
      returning {
        gender
        id
        nama
        umur
      }
    }
  }
`

export const DeletePassenger = gql`
mutation MyMutation($id: Int!) {
    delete_kampus_merdeka_anggota(where: {id: {_eq: $id}}) {
      affected_rows
      returning {
        id
        gender
        nama
        umur
      }
    }
  }
`

export const UpdatePassenger = gql`
mutation MyMutation3($id: Int!, $gender: String!, $nama: String!, $umur: Int!) {
    update_kampus_merdeka_anggota(where: {id: {_eq: $id}}, _set: {gender: $gender, nama: $nama, umur: $umur}) {
      affected_rows
      returning {
        gender
        id
        nama
        umur
      }
    }
  }
`

export const GetUsers = gql`
query MyQuery {
    kampus_merdeka_anggota {
      gender
      id
      nama
      umur
    }
  }
`  

export const GetUserById = gql`
    query MyQuery($id: Int!) {
  kampus_merdeka_anggota(where: {id: {_eq: $id}}) {
    gender
    id
    nama
    umur
  }
}
`

function Home() {
    // const { error, loading, data } = useQuery(GetUsers);
    const [getPassenger, {error, loading, data}] = useLazyQuery(GetUserById);
    const [deletePassenger, {loading: loadingDelete}] = useMutation(DeletePassenger, {
        refetchQueries: [GetUserById]
    });
    const [insertPassenger, {loading: loadingInsert}] = useMutation(InsertPassenger, {
        refetchQueries: [GetUserById]
    });
    const [editPassenger, {loading: loadingEdit}] = useMutation(UpdatePassenger, {
        refetchQueries: [GetUserById]
    });

    useEffect(() => {
        if (data) {
            setDataPassenger(data.kampus_merdeka_anggota);
        }
        if (error) {
            console.log("tes",error);
            return null
        }
    }, [data, error])

    const [dataPassenger, setDataPassenger] = useState([]);
    const [id, setId] = useState({id: null});

    const hapusPengunjung = (id) => {
        deletePassenger({variables: {
            id: id
        }})
    }

    const tambahPengunjung = (newUser) => {
        insertPassenger({variables: {
            nama: newUser.nama,
            umur: newUser.umur,
            gender: newUser.gender,
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
        getPassenger({variables: {
            id: id
        }})
        setDataPassenger(data?.kampus_merdeka_anggota)
    }

    const onChangeId = (e) => {
        if (e.target) {
            setId(e.target.value)
        }
    }

    return (
        <div>
            <Header />
            <input type="number" className="input-text" placeholder="ID..." value={id} onChange={onChangeId} />
            <button onClick={onGetData}>Get Data</button>
            {data? <ListPassenger data={dataPassenger} hapusPengunjung={hapusPengunjung} editPengunjung={editPengunjung}/> : null}
            {data? <PassengerInput tambahPengunjung={tambahPengunjung}/> : null}
        </div>
    )
}

export default Home;