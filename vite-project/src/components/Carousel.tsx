interface Props {
    imageNames: string[];
}

const Carousel = ({imageNames}: Props) => {
  return (
    <div className="banner">
        <div className="slider" style={{ "--quantity": {imageNames.length} } as React.CSSProperties}>
            {imageNames.map((name, index) => (
                <div
                    className="item"
                    style={{ "--position": {index}} as React.CSSProperties}
                ><img src = "images/" + {name} alt = {name}></img></div>
            ))}
        </div>
        <div className="content">
            <h1 data-content="">
                
            </h1>
            <div className="author">
                <h2>Email -</h2>
                <p><b><a href="mailto:connorkippes1@gmail.com">connorkippes1@gmail.com</a></b></p>
                <p>
                    Email me to make your website!
                </p>
            </div>
            <div className="model"></div>
        </div>
    </div>
  );
}

export default Carousel