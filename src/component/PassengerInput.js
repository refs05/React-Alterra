import { useState } from "react"
import "./Home.css"
 
function PassengerInput(props) {
  const [state, setState] = useState({
    nama: "",
    umur: "",
    gender: "Male",
    editing: true,
  })

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    if (state.nama.trim() && state.umur && state.gender) {
      const umur = state.umur
      if (umur >= 100 || umur <= 12) {
        alert("Umur tidak sesuai")
      } else {
        const newData = {
          nama: state.nama,
          umur: state.umur,
          gender: state.gender,
        }
        props.tambahPengunjung(newData)
        setState({
          ...state,
          nama: "",
          umur: "",
          gender: "Male",
        })
      }
    } else {
      alert("Data masih ada yang kosong")
    }
  }

  const handleBukaInput = () => {
    setState({
      ...state,
      editing: false,
    })
  }

  const handleTutupInput = () => {
    setState({
      ...state,
      editing: true,
    })
  }

  let viewMode = {}
  let editMode = {}

  if (state.editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  return (
    <div>
      <div onSubmit={handleSubmit} style={viewMode}>
        <p>Masukkan Nama Anda</p>
        <input type="text" className="input-text" placeholder="Nama anda ..." value={state.nama} name="nama" onChange={onChange} />
        <p>Masukkan Umur Anda</p>
        <input type="number" className="input-text" placeholder="Umur anda ..." value={state.umur} name="umur" onChange={onChange} />
        <p>Masukkan Jenis Kelamin Anda</p>
        <select onChange={onChange} name="gender">
          <option value="Male" selected>
            Male
          </option>
          <option value="Female">Female</option>
        </select>
        <p></p>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleTutupInput} style={{ marginLeft: "10px" }}>
          Selesai
        </button>
      </div>
      <button className="inputan" onClick={handleBukaInput} style={editMode}>
        Masukkan Nama Pengunjung
      </button>
    </div>
  )
}

export default PassengerInput
