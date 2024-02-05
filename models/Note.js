export default class Note{

	static REFERENCE_NOTE_POSITION=57;
	
	
	static ENG_NOTE_NAMES=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
	static FR_NOTE_NAMES=["Do","Do#","Ré","Ré#","Mi","Fa","Fa#","Sol","Sol#","La","La#","Si"];
	
	constructor(position){
		this.position=position;
	}
	
	getEngNoteName(){
		return Note.ENG_NOTE_NAMES[this.position%12];
	}
	
	getFrNoteName(){
		return Note.FR_NOTE_NAMES[this.position%12];
	}
	
	getEngName(){
		return this.getEngNoteName()+Math.floor(this.position/12);
	}
	
	getFrName(){
		return this.getFrNoteName()+(Math.floor(this.position/12)-1);
	}
	
	getFrequency(referenceFrequency){
		return referenceFrequency*Math.pow(2,(this.position-Note.REFERENCE_NOTE_POSITION)/12);
	}
}