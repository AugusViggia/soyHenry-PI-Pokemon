import { Link } from 'react-router-dom';
import style from './Cards.module.css';


const Card = ({ id, image, name, types, attack }) => {

    return (
        <div className={style.card}>
            <div className={style.containerImg}> 
                <Link to={`detail/${id}`} className={style.detail}>
                    <img src={image} alt={name} className={style.img}/>
                </Link>
            </div>
            <div className={style.containerTitle}> 
                <p className={style.name}>{name}</p>
            </div>
            <div className={style.containerTypes}>
                {types?.map(type => {return <div  className='{styles.type}'>{typeof type === 'object' ? type.name : type}</div>})} 
            </div>
            <div>
            </div>
        </div>
    )
    
};

export default Card;
