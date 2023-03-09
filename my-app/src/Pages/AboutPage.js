
import bg from "../Images/defaultBg.jpg"
import PageTemplate from "../Components/PageTemplate/PageTemplate"

const AboutPage = () => {

    return(
        <PageTemplate bg={bg}>
            <div className="center-text-div about">
                <p>Here you can get information on how to do the exercises correctly, which is critical to progress.</p>
                <p>Learn which foods are most beneficial and which will help you achieve results.</p>
                <p>Also nutritional supplements that will speed up your progress and help you both recover faster after exercise as well as get in better shape.</p>
            </div>
        </PageTemplate>
    )
}

export default AboutPage