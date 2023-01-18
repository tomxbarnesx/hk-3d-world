import Image from 'next/image';
import styles from './Nav.module.scss';

export default function Nav({ handleClick }) {
    return (
        <nav className={styles.topNav}>
            <Image 
                src="https://d38ekezks43s3u.cloudfront.net/LogoWhiteTightCrop.png"
                width={48}
                height={66}
                alt="Hot Knives coil logo"
                onClick={handleClick}
            />
            <span>Hot</span>
            <span>Knives</span>
        </nav>
    )
}