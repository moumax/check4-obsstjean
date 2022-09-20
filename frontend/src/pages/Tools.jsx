import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import userAPI from "../services/userAPI";
import CurrentUserContext from "../contexts/userContext";

export default function Ciel() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const { user, setUser } = useContext(CurrentUserContext);
  const [cameras, setCameras] = useState([]);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [sensor, setSensor] = useState("");
  const [widthmm, setWidthmm] = useState("");
  const [heightmm, setHeightmm] = useState("");
  const [widthpx, setWidthpx] = useState("");
  const [height, setHeight] = useState("");
  const [photosites, setPhotosites] = useState("");
  const [megapixels, setMegapixels] = useState("");
  const [maxspeed, setMaxspeed] = useState("");
  const [dynamic, setDynamic] = useState("");
  const [bits, setBits] = useState("");
  const [readnoise, setReadnoise] = useState("");
  const [fullwell, setFullwell] = useState("");
  const [readtime, setReadtime] = useState("");
  const [cooler, setCooler] = useState("");

  const getCameras = () => {
    if (user) {
      userAPI.get("/api/cameras").then((response) => {
        setCameras(response.data[0]);
      });
    }
  };

  const updateCameras = async (id) => {
    if (user) {
      try {
        const updatedCamera = {};
        if (brand) updatedCamera.brand = brand;
        if (model) updatedCamera.model = model;
        if (sensor) updatedCamera.sensor = sensor;
        if (widthmm) updatedCamera.widthmm = widthmm;
        if (heightmm) updatedCamera.heightmm = heightmm;
        if (widthpx) updatedCamera.widthpx = widthpx;
        if (height) updatedCamera.height = height;
        if (photosites) updatedCamera.photosites = photosites;
        if (megapixels) updatedCamera.megapixels = megapixels;
        if (maxspeed) updatedCamera.maxspeed = maxspeed;
        if (dynamic) updatedCamera.dynamic = dynamic;
        if (bits) updatedCamera.bits = bits;
        if (readnoise) updatedCamera.readnoise = readnoise;
        if (fullwell) updatedCamera.fullwell = fullwell;
        if (readtime) updatedCamera.readtime = readtime;
        if (cooler) updatedCamera.cooler = cooler;

        await userAPI.put(`/api/cameras/${id}`, updatedCamera);
        toast.success("Votre infos ont été mises à jour");
        getCameras();
      } catch (err) {
        console.error(err);
        toast.warning("Erreur lors de la mise à jour");
      }
    } else toast.warning("Vous n'êtes pas connecté !");
  };

  useEffect(() => {
    getCameras();
  }, []);

  return (
    <div className="tools-container">
      <p>Ceci est la page tools</p>
      <button
        className="btn-admin"
        type="button"
        onClick={() => navigate("/administration")}
      >
        Retour
      </button>
      <div className="list">
        {cameras.map((data) => (
          <ul key={data.id}>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="Marque"
                defaultValue={data.brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="Model"
                defaultValue={data.model}
                onChange={(e) => setModel(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="Sensor"
                defaultValue={data.sensor}
                onChange={(e) => setSensor(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="widthmm"
                defaultValue={data.widthmm}
                onChange={(e) => setWidthmm(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="heightmm"
                defaultValue={data.heightmm}
                onChange={(e) => setHeightmm(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="widthpx"
                defaultValue={data.widthpx}
                onChange={(e) => setWidthpx(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="height"
                defaultValue={data.height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="photosites"
                defaultValue={data.photosites}
                onChange={(e) => setPhotosites(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="megapixels"
                defaultValue={data.megapixels}
                onChange={(e) => setMegapixels(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="maxspeed"
                defaultValue={data.maxspeed}
                onChange={(e) => setMaxspeed(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="dynamic"
                defaultValue={data.dynamic}
                onChange={(e) => setDynamic(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="bits"
                defaultValue={data.bits}
                onChange={(e) => setBits(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="readnoise"
                defaultValue={data.readnoise}
                onChange={(e) => setReadnoise(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="fullwell"
                defaultValue={data.fullwell}
                onChange={(e) => setFullwell(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="readtime"
                defaultValue={data.readtime}
                onChange={(e) => setReadtime(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="cooler"
                defaultValue={data.cooler}
                onChange={(e) => setCooler(e.target.value)}
              />
            </li>
            <button
              className="btn-admin"
              type="button"
              onClick={() => updateCameras(data.id)}
            >
              Modifier la caméra
            </button>
          </ul>
        ))}
      </div>
    </div>
  );
}
