import { Component } from "react";

class PassengerInput extends Component {
    state = {
        nama: "",
        umur: "",
        jenisKelamin: "Pria",
        editing: true
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handlerSubmit = e => {
        e.preventDefault()
        const formIsNotEmpty = this.state.nama && this.state.umur && this.state.jenisKelamin;
        if (formIsNotEmpty) {
            const newData = {
                nama: this.state.nama,
                umur: this.state.umur,
                jenisKelamin: this.state.jenisKelamin
            }

            this.props.tambahPengunjung(newData);
            this.setState({
                nama: "",
                umur: "",
                jenisKelamin: "Pria"
            })
        } else {
            alert("Data masih ada yang kosong")
        }
    }

    handlerBukaInput = () => {
        this.setState({
            editing: false
        })
    }

    handlerTutupInput = () => {
        this.setState({
            editing: true
        })
    }

    render() {
        const viewMode = {};
        const editMode = {};

        if (this.state.editing) {
            viewMode.display = 'none';
        }else {
            editMode.display = 'none';
        }
        return (
            <div>
                <div onSubmit={() => {}} style={viewMode}>
                    <p>Masukan nama anda</p>
                    <input type="text" placeholder="Nama anda...." value={this.state.nama} name="nama" onChange={this.onChange}/>

                    <p>Masukan umur anda</p>
                    <input type="text" placeholder="Umur anda...." value={this.state.umur} name="umur" onChange={this.onChange}/>

                    <p>Masukan Jenis Kelamin anda</p>
                    <select onChange={this.onChange} name="jenisKelamin" id="">
                        <option value="Pria" selected>Pria</option>
                        <option value="Wanita">Wanita</option>
                    </select>

                    <button onClick={this.handlerSubmit}>Submit</button>
                    <button onClick={this.handlerTutupInput}>Selesai</button>
                </div>
                <button onClick={this.handlerBukaInput} style={editMode}>Masukan nama penumpang</button>
            </div>
        )
    }
}

export default PassengerInput;