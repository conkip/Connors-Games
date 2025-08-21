import styles from './WebsiteTitle.module.css'

function WebsiteTitle() {
  return (
    <div className= {styles.titleContainer}>                
        <img src="../../assets/logo.png"></img>

        <h1 className={styles.title}>Connor's Games</h1>
    </div>
  )
}

export default WebsiteTitle