'use strict';

function pii(name, ssn){
    const info = {
        name: name,
        ssn: ssn,
        publicInfo: function() {
          console.log(name);
        }
     
    };
    console.log(info.publicInfo());
};

security("Roberto", 2345)