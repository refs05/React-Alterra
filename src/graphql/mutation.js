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