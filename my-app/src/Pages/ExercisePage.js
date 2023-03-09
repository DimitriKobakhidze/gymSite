import exerciseData from "../Data/ExerciseData"
import ShowcaseItem from "../Components/ShowcaseItem/ShowcaseItem"

const ExercisePage = () => {
    return(
        <main>
            {exerciseData.map((item,id) =>
                <ShowcaseItem
                    key={id} 
                    logo={item.muscleGroupLogo} 
                    headerText={`${item.muscleGroup} Exercises`}
                    headerParagraph="(Click image for video)"
                    gallery={item.exercises}
                />
            )}
        </main>
    )
}



export default ExercisePage