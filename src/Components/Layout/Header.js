import { Fragment } from "react";
import headerimage from "../../assests/meals.jpg"
import classes from "./Heade.module.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
        <div className={classes.header}>
            <h1 className={classes.heading}>ReactMeals</h1>
            {/* <button className={classes.button}>Cart</button> */}
            <HeaderCartButton/>
        </div>
        <div className={classes['main-image']}>
            <img alt="hearder-img" src={headerimage}/>
        </div>

    </Fragment>
    )

};
export default Header;