import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";

const intialValue = [

            {
                id: uuidv4(),
                nomor: 1,
                nama: 'Yoga',
                umur: 22,
                jenisKelamin: 'Pria'
            },
            {
                id: uuidv4(),
                nomor: 2,
                nama: 'Ria',
                umur: 19,
                jenisKelamin: 'Wanita'
            },
            {
                id: uuidv4(),
                nomor: 3,
                nama: 'Fahmi',
                umur: 25,
                jenisKelamin: 'Pria'
            },
            {
                id: uuidv4(),
                nomor: 4,
                nama: 'Lala',
                umur: 21,
                jenisKelamin: 'Wanita'
            },
            {
                id: uuidv4(),
                nomor: 5,
                nama: 'Ivan',
                umur: 25,
                jenisKelamin: 'Pria'
            }
        
]

export const passengerSlice = createSlice({
    name: "passenger",
    initialState: {
        passengers: intialValue,
    },
    reducers: {
        hapusPengunjung: (state, action) => {
            state.passengers = state.passengers.filter((item) => {
                return item.id !== action.payload
            })
        },
        tambahPengunjung: (state, action) => {
            const newData = {
                id: uuidv4(),
                ...action.payload,
                }
                state.passengers = ([...state.passengers, newData])
                // setNomorUrut(newUser["nomor"])
        }
    }
})

export const { hapusPengunjung, tambahPengunjung } = passengerSlice.actions;

export default passengerSlice.reducer