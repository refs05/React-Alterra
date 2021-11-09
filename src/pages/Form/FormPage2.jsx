import React, {     useState } from "react";
import style from "./FormPage.module.css";

const baseData = {
    nama: "",
    email: "",
    handphone: "",
    pendidikan: "",
    kelas: 0,
    harapan: "",
    file: ""
};

const baseError = {
    nama: "",
    email: "",
    handphone: "",
    pendidikan: "",
    kelas: "",
    file: ""
};

const regexCharacters = /^[A-Za-z ]*$/;
const regexNumbers = /^[-+]?[0-9]+$/;

function FormPage() {
    const [data, setData] = useState(baseData);
    const [errors, setError] = useState(baseError);
    // const photoRef = useRef();

    function handleError(name, message) {
        setError((prev) => ({ ...prev, [name]: message }));
    }

    function changeHandler(e) {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "nama") {
            if (!regexCharacters.test(value)) {
                handleError(name, "masukan huruf!");
            } else {
                handleError(name, "");
            }
        }

        if (name === "email") {
            if (value.length > 0 && !value.includes("@")) {
                handleError(name, "kurang @");
            } else if (value.length > 0 && !value.includes(".")) {
                handleError(name, "kurang domain (eg: .com, .co.id, etc)");
            } else {
                handleError(name, "");
            }
        }

        if (name === "handphone") {
            if (value.length > 0 && !regexNumbers.test(value)) {
                handleError(name, "masukan 10-13 Angka!");
            } else if (value.length < 10 || value.length > 13) {
                handleError(
                    name,
                    "masukan 10-13 Angka!"
                );
            } else {
                handleError(name, "");
            }
        }

        if (name === "pendidikan") {
            handleError(name, "");
        }

        setData((prev) => ({ ...prev, [name]: value }));
    }

    function handleChangeSelectTag(e) {
        setData({ ...data, kelas: e.target.value });
    }

    function handlerFile(e) {
        let file = e.target.name;
        let value = e.target.value;
        if (file === "foto") {
            let idxDot = value.lastIndexOf(".")+1;
            let extFile = value.substr(idxDot, value.length).toLowerCase();
            if (extFile==="jpg" || extFile==="jpeg" || extFile==="png"){
                setData((prev) => ({ ...prev, [file]: value }));
            }else{
                handleError("file", "Hanya jpg, jpeg, dan png");
                setData({...data, file: ""})
                alert("Hanya jpg, jpeg, dan png");
            }
        }
    }

    function submitHandler(e) {
        e.preventDefault();
        let isValid = true;

        if (!regexCharacters.test(data.nama)) {
            handleError("nama", "Nama Lengkap Harus Berupa Huruf!");
            isValid = false;
        } else if (data.nama.trim().length === 0) {
            handleError("nama", "Nama tidak boleh kosong!");
            isValid = false;
        }

        if (!data.email.includes("@")) {
            handleError("email", "Email tidak sesuai (kurang @)!");
            isValid = false;
        } else if (!data.email.includes(".")) {
            handleError("email", "Email tidak sesuai (kurang domain)!!");
            isValid = false;
        }
        
        if (data.handphone.trim().length === 0) {
            handleError("handphone", "No. HP tidak boleh kosong!");
            isValid = false;
        } else if (
            data.handphone.length > 0 &&
            !regexNumbers.test(data.handphone)
        ) {
            handleError("handphone", "Masukan hanya angka!");
            isValid = false;
        } else if (data.handphone.length < 10 || data.handphone.length > 13) {
            handleError(
                "handphone",
                "Masukan 10-13 Angka!"
            );
            isValid = false;
        }

        if (data.pendidikan === "") {
            handleError("pendidikan", "Pilih Satu!");
            isValid = false;
        }

        if (data.kelas === 0) {
            handleError("kelas", "Anda belum memilih program!")
            isValid = false;
        }

        if (isValid) {
            const keys = Object.keys(errors);
            isValid = isValid && keys.every((key) => errors[key] === "");
            if (isValid) {
                alert(`Pendaftar atas nama ${data.nama} Berhasil!`);
            } else {
                alert("Terdapat data yang tidak sesuai!");
            }
        } else {
            alert("Terdapat data yang tidak sesuai!");
        }
        // console.log(typeof( data.kelas))
        //console.log(errors)
    }

    function resetHandler() {
        setData(baseData);
        setError(baseError);
    }

    return (
        <div className={style.container}>
            <h1>Pendaftaran Peserta Coding Bootcamp</h1>
            <form onSubmit={submitHandler}>
                <div className={style.formControl}>
                    <label>Nama Lengkap:</label>
                    <input
                        onChange={changeHandler}
                        value={data.nama}
                        name="nama"
                        type="text"
                        minLength="1"
                        maxLength="50"
                    />
                    <p className={style.error}>{errors.nama}</p>
                </div>
                <div className={style.formControl}>
                    <label>Email:</label>
                    <input
                        onChange={changeHandler}
                        value={data.email}
                        name="email"
                        type="text"
                    />
                    <p className={style.error}>{errors.email}</p>
                </div>
                <div className={style.formControl}>
                    <label>No. Handphone:</label>
                    <input
                        onChange={changeHandler}
                        value={data.handphone}
                        name="handphone"
                        type="text"
                    />
                    <p className={style.error}>{errors.handphone}</p>
                </div>
                <div className={style.formControl}>
                    <label>Latar Belakang Pendidikan:</label>
                    <label>
                        <input
                            onChange={changeHandler}
                            value="IT"
                            name="pendidikan"
                            type="radio"
                            checked={data.pendidikan === "IT" ? true : false}
                        />
                        IT
                    </label>
                    <label>
                        <input
                            onChange={changeHandler}
                            value="Non IT"
                            name="pendidikan"
                            type="radio"
                            checked={
                                data.pendidikan === "Non IT" ? true : false
                            }
                        />
                        Non IT
                    </label>
                    <p className={style.error}>{errors.pendidikan}</p>
                </div>
                <div className={style.formControl}>
                    <label>Kelas Coding yang Dipilih:</label>
                    <select nama="kelas" value={data.kelas} onChange={handleChangeSelectTag}>
                        <option value="0">Pilih Satu Program</option>
                        <option value="1">Coding Backend with Golang</option>
                        <option value="2">Coding Frontend with ReactJS</option>
                        <option value="3">Fullstack Developer</option>
                    </select>
                    <p className={style.error}>{errors.kelas}</p>
                </div>
                <div className={style.formControl}>
                    <label>Foto Surat Kesungguhan:</label>
                    <input /*ref={photoRef}*/ name="foto" type="file" value={data.file} onChange={handlerFile}/>
                    {/* <p className={style.error}>{errors.file}</p> */}
                </div>
                <div className={style.formControl}>
                    <label>Harapan Untuk Coding Bootcamp ini:</label>
                    <textarea
                        onChange={changeHandler}
                        name="harapan"
                        value={data.harapan}
                        rows="5"
                    ></textarea>
                </div>
                <div className={style.actions}>
                    <button
                        className={style.submit}
                        type="submit"
                        onClick={submitHandler}
                    >
                        Submit
                    </button>
                    <button
                        className={style.reset}
                        type="button"
                        onClick={resetHandler}
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormPage;
