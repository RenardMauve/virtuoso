import Virtuoso from "./Virtuoso.js";

export default class Range{
	constructor(from,to){
		this.notes=Virtuoso.notes.slice(
			Virtuoso.notes.findIndex(note=>note.getEngName()===from),
			Virtuoso.notes.findIndex(note=>note.getEngName()===to)+1
		)
	}
	
	pickRandom(){
		return this.notes[Math.floor(Math.random()*this.notes.length)];
	}
}