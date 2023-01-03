import Image from 'next/image';
import styles from './Nav.module.scss';

export default function Nav() {
    return (
        <nav className={styles.topNav}>
            <Image 
                src="https://d38ekezks43s3u.cloudfront.net/LogoWhiteTightCrop.png"
                width={48}
                height={52}
                alt="Hot Knives coil logo"
            />
            <span>Hot</span>
            <span>Knives</span>
        </nav>
    )
}