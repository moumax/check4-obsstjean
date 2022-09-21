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
  const [camerasId, setCamerasId] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState([]);
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

  const createNewCamera = () => {
    // e.preventDefault();
    if (user) {
      userAPI
        .post(`/api/cameras`, {
          brand,
          model,
          sensor,
          widthmm,
          heightmm,
          widthpx,
          height,
          photosites,
          megapixels,
          maxspeed,
          dynamic,
          bits,
          readnoise,
          fullwell,
          readtime,
          cooler,
        })
        .then(() => {
          toast.success("Nouvelle caméra ajouté !");
          getCameras();
          setCameras("");
          setBrand("");
          setModel("");
          setSensor("");
          setWidthmm("");
          setHeightmm("");
          setWidthpx("");
          setHeight("");
          setPhotosites("");
          setMegapixels("");
          setMaxspeed("");
          setDynamic("");
          setReadnoise("");
          setFullwell("");
          setReadtime("");
          setCooler("");
        })
        .catch((err) => {
          console.error(err);
          toast.warning("Erreur lors de l'envoi du formulaire");
        });
    } else toast.warning("Vous n'êtes pas connecté !");
  };

  useEffect(() => {
    getCameras();
  }, []);

  const handleCameras = (event) => {
    const getCamerasId = event.target.value;
    setCamerasId(getCamerasId);
  };

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

      <div className="camera">
        <select
          name="cameras"
          className="cameras"
          onChange={(e) => handleCameras(e)}
        >
          <option>--Selection Caméra</option>
          {cameras.map((cameraGet) => (
            <option key={cameraGet.id}>
              {cameraGet.brand} -- {cameraGet.model}
            </option>
          ))}
        </select>
        {cameras.map((cameraGet) => (
          <option key={cameraGet.id}>{cameraGet.readnoise}</option>
        ))}
      </div>
      {/* <div className="create">
        {cameras.map((data) => (
          <ul key={data.id}>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="Marque"
                defaultValue={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="Model"
                defaultValue={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="Sensor"
                defaultValue={sensor}
                onChange={(e) => setSensor(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="widthmm"
                defaultValue={widthmm}
                onChange={(e) => setWidthmm(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="heightmm"
                defaultValue={heightmm}
                onChange={(e) => setHeightmm(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="widthpx"
                defaultValue={widthpx}
                onChange={(e) => setWidthpx(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="height"
                defaultValue={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="photosites"
                defaultValue={photosites}
                onChange={(e) => setPhotosites(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="megapixels"
                defaultValue={megapixels}
                onChange={(e) => setMegapixels(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="maxspeed"
                defaultValue={maxspeed}
                onChange={(e) => setMaxspeed(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="dynamic"
                defaultValue={dynamic}
                onChange={(e) => setDynamic(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="bits"
                defaultValue={bits}
                onChange={(e) => setBits(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="readnoise"
                defaultValue={readnoise}
                onChange={(e) => setReadnoise(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="fullwell"
                defaultValue={fullwell}
                onChange={(e) => setFullwell(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="readtime"
                defaultValue={readtime}
                onChange={(e) => setReadtime(e.target.value)}
              />
            </li>
            <li>
              <input
                className="input-camera"
                type="text"
                placeholder="cooler"
                defaultValue={cooler}
                onChange={(e) => setCooler(e.target.value)}
              />
            </li>
            <button
              className="btn-admin"
              type="button"
              onClick={() => createNewCamera(data.id)}
            >
              Créer une nouvelle caméra
            </button>
          </ul>
        ))}
      </div> */}
    </div>
  );
}
