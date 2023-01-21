import styles from '../Nav/Nav.module.scss';

export default function BandNameTrail({ fontClass }) {
    return (
        <div className={`${styles.nameWrapper} ${ fontClass?.length ? fontClass.join(' ') : '' }`}>
            <div>H</div>
            <div>o</div>
            <div>t</div>
            <div className={styles.space}></div>
            <div>K</div>
            <div>n</div>
            <div>i</div>
            <div>v</div>
            <div>e</div>
            <div>s</div>
        </div>
    )
}
