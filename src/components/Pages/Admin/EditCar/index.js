import React, { useEffect, useState } from "react";
import Button from "../../../PageComponent/Admin/Button";
import axios from "axios";
import { useParams } from "react-router-dom";

const categoryData = [
  { label: "2 - 4 Orang", value: "small" },
  { label: "4 - 6 Orang", value: "medium" },
  { label: "6 - 8 Orang", value: "large" },
];

export default function EditCar() {
  let { id } = useParams();
  // const [detailData, setDetailData] = useState();
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/admin/car/${id}`, {
        headers: {
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY4ODMyNDAwM30.sFzg7xHrzQr7jx8n3vGvRcHe-5MxZGUEYOgeWlkQFZY",
        },
      })
      .then((res) => {
        console.log("res ", res);
        setName(res.data.name);
        setPrice(res.data.price);
        setImage(res.data.image);
        setCategory(res.data.category);
        // setDetailData(res.data);
      })
      .catch((err) => {
        console.log("err ", err);
      });
  }, []);

  return (
    <div className="container bg-white">
      <h3>Edit Car</h3>
      <form>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Nama</label>
          <div className="col-sm-10">
            <input
              value={name}
              type="name"
              className="form-control"
              id="inputName"
              placeholder="Isi Nama"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Harga</label>
          <div className="col-sm-10">
            <input
              value={price}
              type="price"
              className="form-control"
              id="inputPrice"
              placeholder="Isi Harga"
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Foto</label>
          <div className="col-sm-10">
            <input
              type="file"
              accept="image/*"
              defaultValue={image}
              className="form-control"
              placeholder={"input"}
              // onChange={(e) =>
              //   setImage({
              //     files: e.target.files[0],
              //     name: e.target.files[0].name,
              //   })
              // }
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Kategori</label>
          <div className="col-sm-10">
            <select className="form-select">
              <option selected>--- Pilih Kategori ----</option>
              {categoryData.map((res) => {
                return <option value={res.value}>{res.label}</option>;
              })}
            </select>
          </div>
        </div>
        {/* <div className="form-group row">
          <div className="col-sm-2">Checkbox</div>
          <div className="col-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck1" />
              <label className="form-check-label" for="gridCheck1">
                Example checkbox
              </label>
            </div>
          </div>
        </div> */}
        <div className="d-flex">
          <Button title="Cancel" outline />
          <div className="px-3" />
          <Button title="Save" />
        </div>
      </form>
    </div>
  );
}
