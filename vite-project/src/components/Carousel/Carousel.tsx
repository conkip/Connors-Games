import styles from './Carousel.module.css'

interface Props {
    imageNames: string[];
}

const Carousel = ({imageNames}: Props) => {
  return (
    <div className={styles.banner}>
        <div className={styles.slider} style={{ "--quantity": imageNames.length.toString() } as React.CSSProperties}>
            {imageNames.map((name, index) => (
                <div 
                    className="item" 
                    style={{ "--position": index.toString()} as React.CSSProperties}
                >
                    <img src = {name} alt = {name}></img>
                </div>
            ))}
        </div>
        <div className={styles.content}>
            <h1 data-content="">
                
            </h1>
            <div className={styles.author}>
                <h2>Email -</h2>
                <p><b><a href="mailto:connorkippes1@gmail.com">connorkippes1@gmail.com</a></b></p>
                <p>
                    Email me to make your website!
                </p>
            </div>
            <div className={styles.model}></div>
        </div>
    </div>
  );
}

export default Carousel