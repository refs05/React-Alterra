import ListItem from './ListItem';
import {gql, useQuery, useLazyQuery} from "@apollo/client"
import { useState } from 'react';

const GetUsers = gql`
  query MyQuery {
    kampus_merdeka_anggota {
      gender
      id
      nama
      umur
    }
  }
` 
const GetUsersById = gql`
    query MyQuery($id: Int!) {
        kampus_merdeka_anggota(where: {id: {_eq: $id}}) {
        gender
        id
        nama
        umur
        }
    } 
`

const ListPassenger = props => {
    const [getTodo, {data, loading, error}] = useLazyQuery(GetUsersById)
    const [userId, setUserId] = useState(0)
    const [list, setList] = useState([])

    if(loading) {
        return "Please wait for a moment..."
    }
    
    if(error) {
        console.log(error)
        return null
    }

    const GetDataById = ()=> {
        getTodo({variables : {
            id : userId
        }});
        setList(data?.kampus_merdeka_anggota)
    }

    const onChangeUserId = (e)=> {
        if(e.target) {
            setUserId(e.target.value)
        }
    }

    return (
        <div>
            <input value={userId} onChange={onChangeUserId} style={{marginBottom: "10px"}}/>
            <button onClick={GetDataById}>Get Data By Id</button>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                <thead bgcolor="red">
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                    <td bgcolor="white" className="removeBorder"></td>
                </thead>
                {data?.kampus_merdeka_anggota.map(item => (
                    <ListItem
                        key={item.id}
                        data={item}
                        hapusPengunjung={props.hapusPengunjung}
                    />
                ))}
            </table>
        </div>
    )
  }

export default ListPassenger;