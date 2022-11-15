class calculator{
  constructor(a,b=1){
  this.a=a;
  this.b=b;
  }
  add=()=>this.a+this.b;
  substract=()=>this.a-this.b;
  divide=()=>this.a/this.b;
  multiply=()=>this.a*this.b;

}
module.exports = calculator;