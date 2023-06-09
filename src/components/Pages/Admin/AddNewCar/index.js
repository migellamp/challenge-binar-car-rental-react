import React, { useContext, useState } from "react";
import Button from "../../../PageComponent/Admin/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { Cookies } from "react-cookie";

import { messageContext } from "../../../context/mesage";
import NavbarAdmin from "../../../PageComponent/NavbarAdmin";

export default function AddNewCar() {
  const { setMessageHandling } = useContext(messageContext);
  const cookies = new Cookies();
  const token = cookies.get("uidTokenBinarApp");
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState([]);
  const [category, setCategory] = useState("");

  //   const refInputFile = useRef(null);

  const submitNewCar = () => {
    const priceConvert = parseInt(price);
    if (!token) navigate("/admin");

    const payload = new FormData();
    payload.append("name", name);
    payload.append("price", priceConvert);
    payload.append("category", category);
    payload.append("status", true);
    payload.append("image", image.files);
    axios
      .post(`${process.env.REACT_APP_BASEURL}/admin/car`, payload, {
        headers: {
          contentType: "multipart/form-data",
          access_token: token,
        },
      })
      .then((res) => {
        setMessageHandling("berhasil tambah data");
        navigate("/admin/list-car");
        navigate(0);
        console.log("ress ", res);
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <>
      <NavbarAdmin />
      <div className="container px-3 bg-white py-3">
        <h3>Add New Car</h3>
        <form>
          <div className="form-group row pb-3 ">
            <label className="col-sm-2 col-form-label">Nama</label>
            <div className="col-sm-10">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="name"
                className="form-control"
                id="inputName"
                placeholder="Isi Nama"
              />
            </div>
          </div>
          <div className="form-group row pb-3">
            <label className="col-sm-2 col-form-label">Harga</label>
            <div className="col-sm-10">
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="price"
                className="form-control"
                id="inputPrice"
                placeholder="Isi Harga"
              />
            </div>
          </div>
          <div className="form-group row pb-3">
            <label className="col-sm-2 col-form-label">Foto</label>
            <div className="col-sm-10">
              <input
                type="file"
                accept="image/*"
                defaultValue={image.name}
                className="form-control"
                placeholder={"input"}
                onChange={(e) =>
                  setImage({
                    files: e.target.files[0],
                    name: e.target.files[0].name,
                  })
                }
              />
            </div>
          </div>
          <div className="form-group row pb-3">
            <label className="col-sm-2 col-form-label">Kategori</label>
            <div className="col-sm-10">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>--- Pilih Kategori ----</option>
                <option value="large">6 - 8 Orang</option>
                <option value="medium">4 - 6 Orang</option>
                <option value="small">2 - 4 Orang</option>
              </select>
            </div>
          </div>
          <div className="d-flex">
            <Button
              title="Cancel"
              outline
              onClick={() => navigate("/admin/list-car")}
            />
            <div className="px-3" />
            <Button title="Save" onClick={submitNewCar} />
          </div>
        </form>
      </div>
    </>
  );
}
