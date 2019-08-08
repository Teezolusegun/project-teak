import React, {Component} from 'react'
import styles from "../styles/header.module.css"
import image1 from  "../assets/ccc.jpeg"




export default class Header extends Component{
    render(){
        return(
            <div className={styles.header}>
                <div className={styles.logo}><img src={image1} alt="my-sign"/></div>
                <div className={styles.element}></div>
            </div>
        )
    }
}