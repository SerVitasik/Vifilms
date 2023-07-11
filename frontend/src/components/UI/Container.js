import classes from "./Container.module.scss";
const Container = ({children}) => {
    return (
        <div className={classes.container}>
            {children}
        </div>
    );
};
// style={{background: `linear-gradient(180deg, rgba(0, 0, 0, 0.37) 0%, #111 92.42%), url(${backgroundImage}), lightgray 50% / cover no-repeat`}}
export default Container;