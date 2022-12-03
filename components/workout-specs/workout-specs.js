import styles from './workout-specs.module.css'

export default function WorkoutSpec({duration, numExercises, times}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <span className={styles.value}>{duration}</span>
                <span className={styles.label}>minutes</span>
            </div>

            <div className={styles.item}>
                <span className={styles.value}>{times}</span>
                <span className={styles.label}>week</span>
            </div>

            <div className={styles.item}>
                <span className={styles.value}>{numExercises}</span>
                <span className={styles.label}>exercises</span>
            </div>
        </div>
    )
}
