const Card =(title) => {
return(
<div style={styles.cardCss} className="card mt-5">
    <div className="card-header">{title}</div>
    <div className="card-body">
        <h1>card body</h1>
    </div>
</div>
);
};

const styles={
    cardCss:{
    backgroundColor: "blue",
    }
};

export default Card;