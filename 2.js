function ipv4Parser(ip, mask){
    const ipOctets = ip.split('.');
      const maskOctets = mask.split('.');
  
      let networkBlock = [];
      let hostIdentifier = [];
  
      for (let i = 0; i < 4; i++) {
          let ipPart = Number(ipOctets[i]);
          let maskPart = Number(maskOctets[i]);
  
          networkBlock.push(ipPart & maskPart);   
          hostIdentifier.push(ipPart & ~maskPart); 
      }
  
      return [networkBlock.join('.'), hostIdentifier.join('.')];
  }