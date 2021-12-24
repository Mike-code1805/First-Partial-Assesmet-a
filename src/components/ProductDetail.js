import {useState, useEffect} from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from './modules/title.module.css'
import ProductCard from "./ProductCard";

const ProductsDetail = () => {   
    

    const {state} = useLocation();
    console.log(state)
    console.log(state.rating.rate)
    // const [users, setState] = useState([]);

    // //llamado asíncrono
    // useEffect(()=>{
    //     fetch('https://fakestoreapi.com/products')
    //     .then(response => response.json()) //cuando fetch esté listo, se hace esto, esta respuesta se transforma a json para poder verlo
    //     .then(data =>{ 
    //        setState(data); //Accede a la data
    //     })
    //     .catch(error => console.log(error));
    // }, []);

    return(
        <div>
            <h1>{state.title}</h1>            
            <h2> {state.price} </h2>
            <h3> {state.description} </h3>
            <h4> {state.category} </h4>            
            <p> </p>
            <img src={state.image} alt=""/>
            <li> {state.rating.rate} </li>
            <li> {state.rating.count} </li>
        </div>
        
        // <div className={styles.flexContainerMain}>
        //     <h1>hola</h1>
        //     {users.map(({id, title})=>
        //         <ProductCard key={id} title={title}></ProductCard>
        //     )}
        // </div>
    );

 }

export default ProductsDetail;