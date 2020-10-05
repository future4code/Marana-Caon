import { User, UserRole } from "../model/User";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { ShowInputDTO } from "../model/Show";
import { ShowDatabase } from "../data/ShowDatabase";


export class ShowBusiness {

    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ){}

    async registerShow(show: ShowInputDTO, token:string): Promise<void> {        
        if(!show.week_day || !show.start_time || !show.end_time || !show.band_id ) {
            throw new Error("All inputs must be filled!")
        }

        if(show.week_day !== "FRIDAY" && show.week_day !== "SATURDAY" && show.week_day !== "SUNDAY") {
            throw new Error ("Week days must be FRIDAY, SATURDAY or SUNDAY!")
        }

        if(show.start_time < 8 || show.start_time > 22) {
            throw new Error ("Start time must be between 8 to 22")
        }

        if(show.end_time < 9 || show.end_time > 23) {
            throw new Error ("End time must be between 9 to 23")
        }

        if(show.start_time > show.end_time) {
            throw new Error ("Start time cannot be later than end time")
        }

        const showDb = await this.showDatabase.getAllShows()

        showDb && showDb.map((shows) => {
            if(show.week_day === shows.week_day){
                if(shows.start_time <= show.start_time  && show.start_time < shows.end_time){
                    if(shows.start_time < show.end_time && show.end_time > shows.end_time){
                        throw new Error("A show is already registered for that time.")
                    }
                }
            }
        })

        const user = this.authenticator.getData(token)

        if (User.stringToUserRole(user.role) !== UserRole.ADMIN) {
            throw new Error("Only an ADMIN can register a show.")
        }

        const id = this.idGenerator.generate();

        return await this.showDatabase.createShow(id, show.week_day, show.start_time, show.end_time, show.band_id)
    }

} 