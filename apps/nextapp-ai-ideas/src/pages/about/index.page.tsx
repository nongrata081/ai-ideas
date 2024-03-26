import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface AboutProps {}

export default function About(props: AboutProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to About!</h1>
    </div>
  );
}
