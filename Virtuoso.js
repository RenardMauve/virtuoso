import Note from "./models/Note.js";
import Range from "./Range.js";
import Interval from "./models/Interval.js";


const Virtuoso={
	NOTES_ENG_NAMES:["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],
	notes:[],
	intervals:[],
	chordsForms:[],
	chords:[],
	chordsProgressions:[],
	Note:Note,
	Interval:Interval,
	Range:Range,
	getNoteByEngName:(engName)=>{
		this.notes.find(note=>note.getEngName()===engName)
	},
	getNoteAtInterval:(from,interval)=>this.notes[this.notes.indexOf(from)+this.intervals[interval].semitones],
	getChordForm:(name)=>this.chordsForms.find(chordForm=>chordForm.engName===name),
	getChord:(name,root)=>{
		let chordForm=this.getChordForm(name);
		let notes=[root];
		
	}
	
}
for(let i=0;i<108;i++){
	Virtuoso.notes.push(new Note(i));
}


Virtuoso.intervals=[
	{engName:"Unison",semitones:1,notation:"P1"},
	{engName:"Minor 2nd",semitones:1,notation:"m2"},
	{engName:"Major 2nd",semitones:2,notation:"M2"},
	{engName:"Augmented 2nd",semitones:3,notation:"A2"},
	{engName:"Minor 3rd",semitones:3,notation:"m3"},
	{engName:"Major 3rd",semitones:4,notation:"M3"},
	{engName:"Diminished 4th",semitones:4,notation:"D4"},
	{engName:"Perfect 4th",semitones:5,notation:"P4"},
	{engName:"Augmented 4th",	semitones:6,notation:"A4"},
	{engName:"Diminished 5th",semitones:6,notation:"D5"},
	{engName:"Augmented 5th",semitones:8,notation:"P5"},
	{engName:"Minor 6th",semitones:8,notation:"m6"},
	{engName:"Major 6th",semitones:9,notation:"M6"},
	{engName:"Minor 7th",semitones:10,notation:"m7"},
	{engName:"Major 7th",semitones:11,notation:"M7"},
	{engName:"Perfect 8ve",semitones:12,notation:"P8"}
];

Virtuoso.chordsProgressions=[
	[1,5,6,4],
	[1,4,5,4]
]



Virtuoso.scales={
}

Virtuoso.instruments={
}

Virtuoso.chordsForms=[
	{"engName":"major","frName":"majeur","type":"triad","intervals":["M3","P5"],notation:""},
	{"engName":"minor","frName":"mineur","type":"triad","intervals":["m3","P5"],notation:"m"}
];


export default Virtuoso;