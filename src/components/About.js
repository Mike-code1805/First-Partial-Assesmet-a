import { Fragment } from "react";
import styles from './modules/title.module.css'
const About = () => {    

    return(
        <div className={styles.flexContainerCard}>              
            <div className={styles.flexContainerBottomTitle} >
                Link Github: 
            </div>
            <div className={styles.flexContainerBottomTitle} >
                Correo: miguelenrique1805@gmail.com
            </div>
            <div className={styles.flexContainerBottomTitle} >
                Descripción: 
                <li>
                    Cosa 1:
                </li>
                <li>
                    Cosa 2:
                </li>
                <li>
                    Cosa 3:
                </li>
            </div>
            <div className={styles.flexContainerBottomTitle} >
                Descripción: 
                <li>
                    Edad: 21 años
                </li>
                <li>
                    Estatura: 1.70m
                </li>
                <li>
                    Nacionalidad: Peruano
                </li>
            </div>
            <div className={styles.flexContainerBottomTitle} >
                My nombre: Miguel Enrique Saca Accostupa
            </div>                                                          
            <div>                        
                <img className={styles.flexContainerImage} src={'public/unnamed.webp'} alt=""/>
            </div> 
                    
        </div>
        
    );

 }

export default About;
