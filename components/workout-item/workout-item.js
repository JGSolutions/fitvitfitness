import styles from './workout-item.module.css'
import WorkoutSpec from '../workout-specs/workout-specs';

export default function WorkoutItem({id, title, description, duration, numExercises, times}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleSection}>{title}</div>
            <div className={styles.contentSection}>
                <div className={styles.description}>
                    {description}
                </div>
                <div className={styles.date}>
                    <WorkoutSpec duration={duration} numExercises={numExercises} times={times} />
                </div>
            </div>
        </div>
    )
}
