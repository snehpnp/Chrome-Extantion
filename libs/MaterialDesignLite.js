const MaterialDesignLite = {
    
    init:()=>{
        // Re-inti MDL components
        setTimeout(()=>{
            componentHandler.upgradeAllRegistered();
            // In case upper fails
            setTimeout(()=>{
                componentHandler.upgradeAllRegistered();
            },200);
        },10);
        
    }
    
};