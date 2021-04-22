import format from 'date-fns/format';
import ptBr from 'date-fns/locale/pt-BR';
import styles from './styles.module.scss';

export function Header() {

    const currentDate = format(new Date(), 'EEEEEE, d MMMM y', {
        locale: ptBr,
    });

    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="header logo Podcastr" />
            <p>O melhor para você, sempre</p>
            <span>{currentDate}</span>
        </header>
    );
}