//Q6
const count ={
          counter:0,
          add : function(){
               this.counter = this.counter+1;
               return this.counter;
          },  
       reset:  function  (){
         this.counter=0;
     }
     }
     count.add()
     count.add()
     count.add()
     console.log(count.counter )
     count.reset()
     console.log(count.counter  )
     
     
     // Q7) for given question 6, counter is the free variable.
    
     
     
     // Q8)
     var make_adder =(function (x){
          var counter =0;
          return function (){
               return counter+=x;
          }
          
     } )
     
      add5 =make_adder(5)
      add5()
      add5()
      console.log( add5())
     
     // Q9)
     // We can use  delete window.global such delete (variable); or 
     // we can clear value on variable from the global object by 
     //reassign variable value to empty string .also we can remove DOM element by using remove()
     
     
     
      //Q10
     
      var Employee =(function(){
          let name ="Jarso"
          let age = 30
         let salary =2000000
          const ThesetAge = function(newAge){
         
          age= newAge
         
         
          }
          const ThesetSalay = function(newSalary){
          salary= newSalary
          }
          const ThesetName= function(newName){
          name= newName
          }
          function getAge(){
               return age;
     
          }
          function getSalary(){
               return salary;
          }
          function getName(){
               return name;
          }
          return {
          setAge :ThesetAge,
          setName:ThesetName,
          setSalary :ThesetSalay,
          increaseSalary: function(percentaage){
         salary =getSalary()+percentaage*getSalary()
          return salary
          },
          incrementAge:function(addAge){
         return getAge()+addAge;
     
          },
          address:"Fairfield",
          setAdress: function(newAdress){
          address =newAdress;
          },
          getAdress: function(){
          return this.address;
          }
          }
         })();
         console.log(Employee.name)  ;
         console.log(Employee.age)  ;
         console.log(Employee.salary) ;
         Employee.setAge(23) ;
         Employee.setName("Thomba") ;
         Employee.setSalary(300000) ; 
         console.log(Employee.increaseSalary(0.1)) ;
         console.log(Employee.incrementAge(3)) ;
         console.log(Employee.getAdress()) ;
     