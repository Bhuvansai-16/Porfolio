import myImage from './image4j-removebg-preview.png';
function Home() {
  return (
    <section id="home">
      <div className="home-content">
        <h1>Hello,</h1><span><img src={myImage} alt="Description" /></span>
        <h1> I'm Bhuvansai</h1>
        <p>Web Developer | AI/ML Enthusiast</p>
        <a href="./projects">Explore My Work</a>
      </div>
    </section>
  );
}

export default Home;
