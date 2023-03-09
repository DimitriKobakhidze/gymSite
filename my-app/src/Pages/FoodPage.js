import ShowcaseItem from "../Components/ShowcaseItem/ShowcaseItem";
import foodData from "../Data/FoodData";



const FoodPage = () => {
    return(
        <main>
            {foodData.map((item,id) => 
                <ShowcaseItem 
                    key={id}
                    logo={item.logo}
                    headerText={item.name}
                    headerParagraph={item.paragraph}
                    gallery={item.gallery}
                />
            )}
        </main>
    )
}


export default FoodPage