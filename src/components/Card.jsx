import Img from "./img";
import Title from "./title";
import Paragraph from "./Paragraph";
import Btn from "./Btn";
import "./Card.css";

const Card = () =>{
    return(
        <div className= "card">
            <Img src=".\lightning-mcqueen.webp"/>
            <Title title="McQueen"/>
            <Paragraph p= "Lightning is a professional racer in the Piston Cup racing series, which emulates the NASCAR Cup Series, and acquires several Piston Cup victories during his career. He is the Best car in the world of racing."/>
            <div className="btn-row">
                <Btn link="#" btntxt="SHARE"/>
                <Btn link="#" btntxt="LEARN MORE"/>
            </div>
        </div>
    )
}

export default Card;