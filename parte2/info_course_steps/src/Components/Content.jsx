import { Part } from "./Part"

export const Content = ({parts}) => {
   // console.table(parts)
    const total = parts.reduce( (sum, curent_part) => {
        //console.log("mis valores ",sum,curent_part);
        return sum + curent_part.exercises;
    },0 )

    return (
        <>
            {
                parts.map(
                    part => <Part key={part.id} text={ `${part.name} ${part.exercises}` } />
                )
            }
            <b>
            <Part text={ `Number of exercises ${total}` } />
            </b>
        </>
    )
}