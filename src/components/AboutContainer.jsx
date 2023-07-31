import { activities } from "../assets/activities"

const AboutContainer = () => {
    let concertYears = []
    let previousYear = 0

    activities.forEach(activity=>{
        if (activity.type === "concert" && activity.year !== previousYear){
            concertYears.push(activity.year)
            previousYear = activity.year
        }
    })

    concertYears = concertYears.sort((a,b) => {
        return b-a
    })

  return (
    <div className='about-container'>
        <div className="about-info">
            <p><span>andrew simon miller</span> is a composer of concrète music and artistic researcher from Sydney, Australia</p>
        </div>
        <div className="about-activities">
            <div className="about__concerts">
            <h4>concerts</h4>

            {concertYears.map(year => {
                return (
                    <div>
                        <h5 style={{marginBottom: "-0.5rem"}}>{year}</h5>
                        {activities.map(activity=>{
                            if (activity.type === "concert" && activity.year === year){
                                return (
                                    <p>{activity.title} - {activity.eventType} - {activity.location}</p>
                                )
                            }
                            else return ""
                        })}
                    </div>
                )
            })}
            </div>
            <div className="about__publications">
            <h4>publications</h4>
            {activities.map(activity => {
                if (activity.type === "publication"){
                    return (
                        <div>
                            <h5 style={{marginBottom: "-0.5rem"}}>2020</h5>
                            <p>{activity.title}</p>
                        </div>
                        
                    )
                }
                else return ""
            })}
            </div>
        </div>
    </div>
  )
}

export { AboutContainer }