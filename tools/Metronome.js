class Metronome extends EventTarget{

	static TICK="metronome_tick";
	
	constructor(){
		super();
		this.tickerInterval=null;
	}
	
	start(){
		this.tickerInterval=setInterval(this.tick.bind(this),this.delay);
	}
	
	pause(){
	
	}
	
	stop(){
		
	}
	
	tick(){
		this.dispatchEvent(new Event(Metronome.TICK));
	}
	
	getTimeElapsedSinceStart(){
		
	}
	
	setTempo(tempo){
		this.tempo=tempo;
		this.delay=(60/tempo)*1000;
	}
	
	getTempo(){
		return this.tempo;
	}
	
	setTempoFromDelay(delay){
		this.setTempo(Math.round(60/delay));
	}
	
	getDelay(){
		return this.delay;
	}
	
	
	isPlaying(){
		return this.tickerInterval != null;
	}
	
	getElapsedSecondsSinceStart(){
		
	}
}



export default Metronome;