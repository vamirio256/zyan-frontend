import ListCard from "../../components/ListCard/ListCard";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <section className="home">
        <ListCard title="Đã phát gần đây" />
        <ListCard title="Đề xuất của Zyan" />
        <ListCard title="Hôm nay nghe gì" />
      </section>
    </>
  );
};

export default Home;
