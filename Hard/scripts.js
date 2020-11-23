var pii ={
    
}function pii(name, ssn){
    const info = {
        name: name,
        ssn: ssn,
        publicInfo: function() {
          console.log(name);
        }
     
    };
    console.log(pii.publicInfo());
};

pii("Evelyn", 000-000-0000)