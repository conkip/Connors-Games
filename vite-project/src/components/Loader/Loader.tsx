import stylesPacman from './Loader.module.css'
import stylesTetris from './Loader2.module.css'
import stylesBlob from './Loader3.module.css'

const styleMap: Record<string, typeof stylesPacman> = {
    a: stylesPacman,
    b: stylesTetris,
    c: stylesBlob,
};

interface Props {
    type?: string;
}

const Loader = ({type = "a"}: Props) => {
    const styles = styleMap[type];
    return (
        <div className={styles.loader}></div>
    )
}

export default Loader