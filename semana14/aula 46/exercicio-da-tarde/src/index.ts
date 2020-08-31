import moment from 'moment';

moment.locale('pt-br');

//Exercício 1
type event = {
    name: string,
    description: string,
    startAt: moment.Moment,
    finishAt: moment.Moment
}

const allEvents: event[] = [
	{
		name: "Reunião",
		description: "Reunião muito importante",
		startAt: moment("25/06/2020 15:00", "DD/MM/YYYY HH:mm"),
	 	finishAt: moment("25/06/2020 16:00", "DD/MM/YYYY HH:mm")
	},
	{
		name: "Reuniãozinha",
		description: "Reunião não muito importante",
		startAt: moment("26/06/2020 17:00", "DD/MM/YYYY HH:mm"),
	 	finishAt: moment("26/06/2020 18:00", "DD/MM/YYYY HH:mm")
	}
]

//Exercício 2 e 3
// b) seria necessário setar o fuso horário utilizando utcOffset("valor-do-fuso-horário").
const printAllEvents = (events: event[]): void => {
    events.forEach((item: event) => {
      const duration = item.finishAt.diff(item.startAt, "minutes");
  
      const today = moment();
      const daysUntilEvent = item.startAt.diff(today, "days");
  
      console.log(`
              Nome: ${item.name}
              Horário de início: ${item.startAt.format("dddd, DD de MMMM de YYYY, HH:mm")}
              Horário de fim: ${item.finishAt.format("DD de MMMM de YYYY, HH:mm")}
              Descrição: ${item.description}
              Duração: ${duration} minutos
              Dias até o evento: ${daysUntilEvent}
          `);
    });
  };

//Exercício 4
const createEvent = (
    name: string,
    description: string,
    startAt: moment.Moment,
    finishAt: moment.Moment
  ): void => {
    if (!name || !description || !startAt || !finishAt) {
      console.log("Invalid input");
      return;
    }
  
    const diffStartAtAndToday = startAt.diff(moment(), "seconds");
    const diffFinishAtAndToday = finishAt.diff(moment(), "seconds");
  
    if (diffStartAtAndToday < 0 && diffFinishAtAndToday < 0) {
      console.log("Date cannot be prior to the current date");
      return;
    }
  
    allEvents.push({
      name,
      description,
      startAt,
      finishAt,
    });
  };

 