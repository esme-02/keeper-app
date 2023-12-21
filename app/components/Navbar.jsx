import styles from "./components.module.css"
import HighlightIcon from '@mui/icons-material/Highlight';

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <h1>
        <HighlightIcon />
        Keeper App
      </h1>
    </div>
  )
}

export default Navbar;