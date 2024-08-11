const checkForOrbCollisions = (pData,pConfig, orbs)=>{
    
    for (let i = 0; i < orbs.length; i++){
        const orb = orbs[i];
    
        if(pData.locX + pData.radius + orb.radius > orb.locX
            && pData.locX < orb.locX + pData.radius + orb.radius
            && pData.locY + pData.radius + orb.radius > orb.locY 
            && pData.locY < orb.locY + pData.radius + orb.radius)
        {
        
            distance = Math.sqrt(
                ((pData.locX - orb.locX) * (pData.locX - orb.locX)) + 
                ((pData.locY - orb.locY) * (pData.locY - orb.locY))	
                );
            if(distance < pData.radius + orb.radius){
        
                pData.score += 1; 
                if(pData.radius<150){
                pData.radius += 0.05; 
                }else{
                    pData.radius =150;
                }
                if(pConfig.speed >2.5){
                    pConfig.speed -= 0.005;
                    
                }else if(pConfig.speed <=2.5){
                    pConfig.speed =2.5; 
                }
            
                return i;
            }
        }
    }
    return null
}
        
const checkForPlayerCollisions = (pData,pConfig,players,playersForUsers,playerId)=>{
    
    for(let i = 0; i<players.length; i++){
        const p = players[i];
        if(p.socketId && p.socketId != playerId){ 
            let pLocx = p.playerData.locX
            let pLocy = p.playerData.locY
            let pR = p.playerData.radius

            if(pData.locX + pData.radius + pR > pLocx
            && pData.locX < pLocx + pData.radius + pR
            && pData.locY + pData.radius + pR > pLocy 
            && pData.locY < pLocy + pData.radius + pR){
                distance = Math.sqrt(
                    ((pData.locX - pLocx) * (pData.locX - pLocx)) + 
                    ((pData.locY - pLocy) * (pData.locY - pLocy))	
                    );      
                if(distance < pData.radius + pR){

                    if(pData.radius > pR){
                        pData.score += p.playerData.score + 10;
                        p.alive = false;
                        pData.radius += p.playerData.radius * 0.25
                        const collisionData = {
                            absorbed: p.playerData.name,
                            absorbedBy: pData.name,
                        }

                        players.splice(i, 1,{}); 
                        playersForUsers.splice(i,1,{}) 
                        return collisionData; 
                        break;
                    }
                }
            }
        }
    }
    return null;
}

module.exports = {checkForOrbCollisions, checkForPlayerCollisions}