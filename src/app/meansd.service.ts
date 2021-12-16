import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeansdService {
  average:number;
  SD:number;
 
  dataList: Array<number> = [];
   constructor(){
   }
 
	 calculateMean(stringList:Array<string>):number {

    let mean: number=0;
    let total:number=0;
		 
    for(let i=0; i<stringList.length;i++){
      this.dataList[i]=parseInt(stringList[i]);
			 total=total+this.dataList[i];
		 }
		 mean=total/this.dataList.length;
     this.average=mean;
     localStorage.setItem('localAverage', JSON.stringify(this.average));
     return mean;
	}

  calculateSD(stringList:Array<string>):number {
    let D:number=0;
    let sd:number=0;
    let num:number=0;
    let mean=this.calculateMean(stringList);
    for(let i=0; i<stringList.length;i++){
      this.dataList[i]=parseInt(stringList[i]);
			num=this.dataList[i];
			D= (D+Math.pow((num -mean), 2));
		 }
     sd=Math.sqrt(D/stringList.length)
     this.SD=sd;
     localStorage.setItem('localSd', JSON.stringify(this.SD));
		 return sd;
	}

}
