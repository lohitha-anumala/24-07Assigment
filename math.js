let  employee={
    
    esal:123456789.10,
    calculateHRA:function(){
        console.log(this.hra + `this is hra function`)
       // return Math.round (0.1*this.esal)
       // return Math.abs (0.1*this.esal)
       // return Math.ceil (0.1*this.esal)
      // return Math.sqrt (0.1*this.esal)
      //return Math.floor (0.1*this.esal)
      //return Math.cbrt (0.1*this.esal)
      return Math.random(0.1*this.esal)
       
    }
    }
    console.log(`HRA deduction  per month ${employee.calculateHRA()}`)