import styles from "@/styles/Footer.module.css"
import Link from "next/link"

export default function Footer() {
 return(

<div className={styles.footer}>
    <div>
        
    </div>
    <div>
        <p><b>OddBall 2024 © Created by Jill Nguyen</b></p>
        <Link href="https://github.com/jillnguyen2311/NBATracker-final-project-MDIA3109.git" passHref target="_blank" className="text-green-900 hover:underline">
                  Go to our project repo</Link>
    </div>
</div>

 )
}
