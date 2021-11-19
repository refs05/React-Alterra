import { gql } from '@apollo/client'

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