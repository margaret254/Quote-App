export class Quotes {
  showDescription: boolean;
  constructor(public name: string,public quoteName:string,public author:string,public completeDate: Date){
    this.showDescription=false;
  }
}
