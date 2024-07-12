import "./App.css";
import Navbar from "./Navbar/Navbar";
import User from "./Userlist/User";

function App() {
  const arr = [
    {
      image:
        "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_mwQESLMp5tK6oTmV2NHuMpu3jnw2292wfNcPJPDnijqNg=s900-c-k-c0x00ffffff-no-rj",
      hea: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, distinctio?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloremque exercitationem ut sequi mollitia quidem iusto, nihil quam at ducimus?",
      name: "Mehul Kothari",
    },
    {
      image:
        "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_mwQESLMp5tK6oTmV2NHuMpu3jnw2292wfNcPJPDnijqNg=s900-c-k-c0x00ffffff-no-rj",
      hea: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, distinctio?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloremque exercitationem ut sequi mollitia quidem iusto, nihil quam at ducimus?",
      name: "Mehul Kothari",
    },
    {
      image:
        "https://cdn.vox-cdn.com/thumbor/jalUXMxY6mxDxGoblzxK5BAertU=/68x0:1100x688/1200x800/filters:focal(68x0:1100x688)/cdn.vox-cdn.com/uploads/chorus_image/image/16698067/nature_clouds_sunshine_028618_.0.jpg",
      logo: "https://yt3.googleusercontent.com/ytc/AIdro_mwQESLMp5tK6oTmV2NHuMpu3jnw2292wfNcPJPDnijqNg=s900-c-k-c0x00ffffff-no-rj",
      hea: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, distinctio?",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit doloremque exercitationem ut sequi mollitia quidem iusto, nihil quam at ducimus?",
      name: "Mehul Kothari",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="cont">
        {arr.map((i) => (
          <User key={i.image} x={i} />
        ))}
      </div>
    </div>
  );
}
export default App;
