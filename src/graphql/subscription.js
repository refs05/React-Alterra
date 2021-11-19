import { gql } from '@apollo/client'

export const GetSub = gql`
  subscription MySubscription {
    kampus_merdeka_anggota {
      gender
      id
      nama
      umur
    }
  }
` 