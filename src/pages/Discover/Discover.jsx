import "./Discover.scss";

const Discover = () => {
  const data = [
    {
      title: "Podcast",
      color: "#27856A",
      link: require("../../assets/genre/postcast.png"),
    },
    {
      title: "V-POP ",
      color: "#477D95",
      link: require("../../assets/genre/image 5 (1).png"),
    },
    {
      title: "K-POP",
      color: "#148A08",
      link: require("../../assets/genre/image 5 (2).png"),
    },
    {
      title: "US-UK",
      color: "#8C1932",
      link: require("../../assets/genre/image 5 (3).png"),
    },
    {
      title: "Chill",
      color: "#BA5D07",
      link: require("../../assets/genre/image 5 (4).png"),
    },
    {
      title: "Mood",
      color: "#509BF5",
      link: require("../../assets/genre/image 5 (6).png"),
    },
    {
      title: "Romance",
      color: "#FF4632",
      link: require("../../assets/genre/image 5 (7).png"),
    },
    {
      title: "Jazz",
      color: "#8D67AB",
      link: require("../../assets/genre/image 5 (5).png"),
    },
  ];
  return (
    <div className="container discover">
      <h1 className="discover__title">Thể loại đề xuất</h1>
      <p>Dựa theo nhạc nghe nhiều nhất</p>
      <div className="discover__genre discover__genre-main">
        <div className="row">
          <div className="col-4 col-m-6">
            <div
              className="discover__genre__background"
              style={{ backgroundColor: "#e8115b" }}
            >
              <div className="discover__genre__title">Rock & Roll</div>
              <img src={require("../../assets/genre/rockroll.png")} alt="" />
            </div>
          </div>
          <div className="col-4  col-m-6">
            <div
              className="discover__genre__background"
              style={{ backgroundColor: "#0d73ec" }}
            >
              <div className="discover__genre__title">Hip-Hop</div>
              <img src={require("../../assets/genre/hiphop.png")} alt="" />
            </div>
          </div>
          <div className="col-4 col-m-6">
            <div
              className="discover__genre__background"
              style={{ backgroundColor: "#777777" }}
            >
              <div className="discover__genre__title">Metal</div>
              <img src={require("../../assets/genre/metal.png")} alt="" />
            </div>
          </div>
        </div>
      </div>

      <h1 className="discover__title">Tất cả thể loại</h1>
      <div className="discover__genre discover__genre-all">
        <div className="row">
          {data.map((value, index) => {
            return (
              <div className="col-3 col-t-4 col-m-6">
                <div
                  className="discover__genre__background"
                  style={{ backgroundColor: value.color }}
                >
                  <div className="discover__genre__title">{value.title}</div>
                  <img src={value.link} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Discover;
