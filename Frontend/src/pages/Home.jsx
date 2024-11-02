import img1  from "../images/product1.png"
import '../CSS/Style.css';

const Home = () => {
    return (
        <>
            <div className="Home">
                <p>Healthy & Quality</p>
                <h1>Qualified <br /> Food Chart</h1>
            </div>
            <div className="Container">
               <div className="cont1">
                <img src={img1}/>
                </div> 
                <div className="cont2">
                <img src={img1}/>
                </div> 
                <div className="cont3">
                <img src={img1}/>
                </div> 
                <div className="cont4">
                <img src={img1}/>
                </div> 
            </div>
        </>
    );
};

export default Home;
