import { PictureCardComponent } from "./PictureCardComponent"

export const FavouritesContainerComponent = ({data}) => {
    console.log(data, 'favourites container component data prop')
    return (
        <div className="grid grid-cols-3 gap-5">
          {data.map((pictureData) => {
            return <PictureCardComponent data={pictureData} />
          })}
        </div>
    )
}